import { z } from 'zod';

export const inquiryTypes = [
  'Demo request',
  'Product enquiry',
  'Technical integration',
  'Research collaboration',
  'Partnership',
  'General enquiry',
  // Backwards compatibility with previous tests & pilot inquiries
  'Industrial Perimeter Pilot',
  'Technology & Integration Partnership',
  'Research & Academic Collaboration',
  'Investor Due Diligence',
  'General Technical Inquiry',
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name must not exceed 100 characters.' })
    .regex(/^[a-zA-Z\s.'-]+$/, { message: 'Full name contains invalid characters.' }),
  
  workEmail: z
    .string()
    .trim()
    .min(5, { message: 'Email address is required.' })
    .max(150, { message: 'Email address must not exceed 150 characters.' })
    .email({ message: 'Please provide a valid work email address.' }),
  
  organization: z
    .string()
    .trim()
    .min(2, { message: 'Organization name must be at least 2 characters.' })
    .max(120, { message: 'Organization name must not exceed 120 characters.' }),
  
  phoneNumber: z
    .string()
    .trim()
    .max(30, { message: 'Phone number must not exceed 30 characters.' })
    .regex(/^[+]?[0-9\s().-]*$/, { message: 'Phone number format is invalid.' })
    .optional(),

  areaOfInterest: z
    .string()
    .trim()
    .max(120, { message: 'Area of interest must not exceed 120 characters.' })
    .optional(),

  inquiryType: z.enum(inquiryTypes, {
    errorMap: () => ({ message: 'Please select a valid inquiry type.' }),
  }),
  
  siteCharacteristics: z
    .string()
    .trim()
    .max(200, { message: 'Site details must not exceed 200 characters.' })
    .optional(),
  
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters describing your inquiry.' })
    .max(2000, { message: 'Message must not exceed 2,000 characters.' }),
  
  // Anti-spam honeypot: hidden from real users, bots populate it
  websiteUrl: z.string().max(0, { message: 'Bot submission detected.' }).optional(),
  
  dataConsent: z.literal(true, {
    errorMap: () => ({ message: 'You must acknowledge the privacy notice to submit.' }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
