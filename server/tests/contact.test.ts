import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { app } from '../src/app';

describe('Server API Endpoints & Security Controls', () => {
  it('GET /api/health should respond with operational status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('operational');
    expect(res.body.service).toBe('hatak-r-enquiry-api');
  });

  describe('POST /api/contact - Input Validation & Security', () => {
    it('should successfully accept a valid engineering inquiry', async () => {
      const validPayload = {
        fullName: 'Vikramaditya Rao',
        workEmail: 'v.rao@defense-aerospace.in',
        organization: 'Perimeter Defense Solutions Ltd',
        inquiryType: 'Industrial Perimeter Pilot',
        siteCharacteristics: '10-acre logistics facility, chain link fence',
        message: 'Interested in evaluating HATAK R prototype mount for our southern depot perimeter.',
        dataConsent: true,
      };

      const res = await request(app)
        .post('/api/contact')
        .send(validPayload)
        .set('Content-Type', 'application/json');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toBeDefined();
      expect(res.body.data.referenceId).toMatch(/^HTK-\d{6}-[A-Z0-9]{4}$/);
    });

    it('should reject submission with missing required fields', async () => {
      const invalidPayload = {
        fullName: 'A', // Too short (min 2)
        // workEmail missing
        organization: '',
        inquiryType: 'Invalid Category',
        message: 'short',
        dataConsent: false,
      };

      const res = await request(app)
        .post('/api/contact')
        .send(invalidPayload);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.errors).toBeDefined();
      expect(res.body.errors.workEmail).toBeDefined();
      expect(res.body.errors.fullName).toBeDefined();
    });

    it('should reject honeypot bot trap submissions', async () => {
      const botPayload = {
        fullName: 'Spam Bot',
        workEmail: 'bot@spam.com',
        organization: 'Spam Corp',
        inquiryType: 'General Technical Inquiry',
        message: 'Buy cheap watches and pills here right now!',
        websiteUrl: 'https://malicious-spam-link.ru', // Honeypot filled
        dataConsent: true,
      };

      const res = await request(app)
        .post('/api/contact')
        .send(botPayload);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain('anti-automation');
    });

    it('should reject payload with unrecognized injected fields (Strict Schema)', async () => {
      const injectedPayload = {
        fullName: 'Security Auditor',
        workEmail: 'auditor@security.org',
        organization: 'Audit Labs',
        inquiryType: 'General Technical Inquiry',
        message: 'Testing strict schema boundary rejection against arbitrary keys.',
        dataConsent: true,
        __isAdmin: true, // Injected unexpected property
        sqlInjection: "' OR 1=1 --",
      };

      const res = await request(app)
        .post('/api/contact')
        .send(injectedPayload);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain('Validation failed');
    });
  });

  describe('Security Headers', () => {
    it('should include required Helmet security headers in HTTP response', async () => {
      const res = await request(app).get('/api/health');
      expect(res.headers['x-content-type-options']).toBe('nosniff');
      expect(res.headers['x-frame-options']).toBe('DENY');
      expect(res.headers['referrer-policy']).toBe('strict-origin-when-cross-origin');
      expect(res.headers['content-security-policy']).toBeDefined();
    });
  });
});
