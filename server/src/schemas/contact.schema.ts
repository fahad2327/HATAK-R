import { z } from 'zod';

export const serverInquiryTypes = [
  'Industrial Perimeter Pilot',
  'Technology & Integration Partnership',
  'Research & Academic Collaboration',
  'Investor Due Diligence',
  'General Technical Inquiry',
] as const;

export const serverContactSchema = z
  .object({
    fullName: z
      .string({ required_error: 'Full name is required.' })
      .trim()
      .min(2, { message: 'Full name must be at least 2 characters.' })
      .max(100, { message: 'Full name must not exceed 100 characters.' })
      .regex(/^[a-zA-Z\s.'-]+$/, { message: 'Full name contains prohibited characters.' }),

    workEmail: z
      .string({ required_error: 'Work email is required.' })
      .trim()
      .min(5, { message: 'Work email is required.' })
      .max(150, { message: 'Work email must not exceed 150 characters.' })
      .email({ message: 'Must be a valid email format.' }),

    organization: z
      .string({ required_error: 'Organization name is required.' })
      .trim()
      .min(2, { message: 'Organization name must be at least 2 characters.' })
      .max(120, { message: 'Organization name must not exceed 120 characters.' }),

    inquiryType: z.enum(serverInquiryTypes, {
      errorMap: () => ({ message: 'Inquiry type must be one of the approved categories.' }),
    }),

    siteCharacteristics: z
      .string()
      .trim()
      .max(200, { message: 'Site details must not exceed 200 characters.' })
      .optional(),

    message: z
      .string({ required_error: 'Message is required.' })
      .trim()
      .min(10, { message: 'Message must be at least 10 characters.' })
      .max(2000, { message: 'Message must not exceed 2,000 characters.' }),

    websiteUrl: z
      .string()
      .optional(),

    dataConsent: z.literal(true, {
      errorMap: () => ({ message: 'Consent to privacy terms is mandatory.' }),
    }),
  })
  .strict(); // Rejects unexpected injected fields

export type ServerContactPayload = z.infer<typeof serverContactSchema>;
