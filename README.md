# HATAK R™ — Official Corporate Website & Enquiry Platform

> **Product Concept:** Detect – Decide – Defend  
> **Target Audience:** Industrial customers, institutional buyers, technology partners, and defense evaluators.  
> **Design Language:** Editorial Industrial, disciplined typography, restrained motion, authentic technical schematics.  
> **Brand Palette:** Deep Navy (`#101827`), Signal Red (`#D92E42`), White (`#FFFFFF`), Cool Grey (`#E8EDF4`), Slate (`#536174`).

---

## 1. Architecture Overview

This repository implements the official production website for **HATAK R™**, built as a split architecture combining a high-performance React + TypeScript SPA with an Express + TypeScript secure enquiry backend.

```
hatak-r-web/
├── public/                     # Static public assets (favicon.svg, robots.txt)
├── src/
│   ├── app/                    # Application shell, router (10 routes), scroll-to-top
│   ├── components/
│   │   ├── forms/              # Accessible ContactForm with server-validation & honeypot
│   │   ├── layout/             # Header, Footer, PageHeader, Container
│   │   └── ui/                 # Button, Badge, Card, ArchitectureDiagram
│   ├── data/                   # approvedContent.ts (verified facts & governance tags)
│   ├── lib/                    # api.ts (HTTP client), validation.ts (Zod schemas)
│   ├── pages/                  # 10 discrete responsive pages
│   ├── styles/                 # tokens.css, global.css, Tailwind definitions
│   └── main.tsx
├── server/
│   ├── src/
│   │   ├── config/             # env.ts (environment variable validation)
│   │   ├── middleware/         # validate.ts, rateLimit.ts, errorHandler.ts
│   │   ├── routes/             # contact.routes.ts (POST /api/contact)
│   │   ├── schemas/            # contact.schema.ts (strict Zod schema)
│   │   ├── services/           # mail.service.ts (privacy-aware logging & dispatch)
│   │   └── app.ts              # Express app with Helmet, CORS, and health check
│   └── tests/                  # contact.test.ts (Supertest API & security tests)
├── .env.example                # Variable names only; no secrets
├── package.json
└── tailwind.config.js
```

---

## 2. Sitemap & Routes

| Path | Page | Primary Objective | Primary CTA |
|---|---|---|---|
| `/` | **Home** | Value proposition, prototype status, architectural pipeline diagram, industries overview | Request a Demo |
| `/about` | **About** | Mission, origin, foundational values, roadmap milestones, governance disclosures | Contact Leadership |
| `/solutions` | **Solutions** | Deep dive into edge vision, motorized mount, ECU, multi-node mesh, and review loop | Discuss a Use Case |
| `/technology` | **Technology** | Subsystem schematics (ECU, microstepping pan/tilt mount, optical cluster, CNN pipeline) | Technical Enquiry |
| `/industries` | **Industries** | Warehousing, utilities, campuses, private acreage; explicit pilot readiness tags | Explore Site Fit |
| `/rnd` | **Innovation & R&D** | Bench test methodologies, patent application notice, collaborative research tracks | Partner on R&D |
| `/partners` | **Partners & Recognition** | Verified ecosystem participation, institutional affiliations, IP record | Partnership Enquiry |
| `/contact` | **Contact** | Validated inquiry form, communication desks, SLA notes, privacy notice | Submit Official Inquiry |
| `/privacy` | **Privacy Policy** | Data collected, lawful purpose, retention, security posture, deletion contact | — |
| `/terms` | **Terms of Service** | Terms, intellectual property notices, unreleased prototypes, non-lethal disclaimers | — |

---

## 3. Security Implementation

1. **Strict Server-Side Validation (`Zod`):**
   - Every input field is validated on the backend.
   - Schemas use `.strict()` to reject payloads with unexpected or injected keys.
   - Client-side validation is provided strictly for UX feedback.
2. **Rate Limiting (`express-rate-limit`):**
   - IP-based rate limiting on sensitive endpoints (5 submissions per 15-minute window in production).
3. **Anti-Automation Bot Trap (Honeypot):**
   - Hidden `websiteUrl` field invisible to sighted users and assistive tools. Populated entries are immediately blocked.
4. **Security Headers (`Helmet`):**
   - `Content-Security-Policy` with restricted script, style, and font directives.
   - `X-Content-Type-Options: nosniff`.
   - `X-Frame-Options: DENY` (anti-clickjacking).
   - `Referrer-Policy: strict-origin-when-cross-origin`.
5. **Restricted CORS Policy:**
   - Origins restricted to explicit allowlist; credentials never permitted with wildcard origins.
6. **Privacy-Preserving Audit Logging:**
   - Server logs mask personal email addresses and omit raw sensitive messages. No credentials or tokens are ever logged.
7. **Generic Error Responses:**
   - External clients receive standardized error messages without leaking stack traces or internal server directories.

---

## 4. Local Development & Build Commands

### Prerequisites
- Node.js (v18.0.0 or higher; tested on v24.20.0)
- npm (v9.0.0 or higher)

### Setup
```bash
# Clone and enter directory
cd "c:/projects/project HATAK"

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

### Running Locally
```bash
# Run Frontend (Vite on http://localhost:5173)
npm run dev

# Run Backend API Server (Express on http://localhost:3001)
npm run dev:server

# Run Both Concurrently
npm run dev:all
```

### Production Build & Test
```bash
# Run unit and integration tests (Vitest + Supertest)
npm test

# Build client production bundle (Vite)
npm run build

# Compile server TypeScript (tsc)
npm run build:server

# Launch compiled server in production mode
npm run server
```

---

## 5. Factual-Content Governance Checklist

Before public deployment, the founder or authorized corporate officer must review and sign off on the following factual claims:

- [ ] **Official Logo & Trademark:** Verify high-resolution vector assets for the HATAK R™ mark and trademark status.
- [ ] **Patent Application Filing:** Confirm public disclosure wording regarding Indian Patent Application status (currently designated *Patent Pending / Application Filed*).
- [ ] **DPIIT Registration:** Verify whether DPIIT registration certificate numbers should be publicly displayed or retained in investor data rooms.
- [ ] **Leadership Bios:** Approve official publication of founder biographies and executive credentials.
- [ ] **Hardware Status Disclosures:** Confirm all capability tiers match ongoing bench verification and scheduled pilot timelines.
- [ ] **Contact Desks:** Verify production mailboxes for `contact@hatak-r.com` and `engineering@hatak-r.com`.

---

## 6. Safety & Operational Boundary Notice

The HATAK R™ public web presence complies with ethical engineering standards:
- **No autonomous weapon controls or firing mechanisms** are accessible or operated through this website.
- All response pipelines mandate **authenticated human-in-the-loop verification**.
- Live surveillance feeds or raw biometric uploads are not transmitted to third-party consumer AI services.
