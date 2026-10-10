import nodemailer from 'nodemailer';
import { ServerContactPayload } from '../schemas/contact.schema';
import { config } from '../config/env';

export interface DispatchResult {
  referenceId: string;
  dispatchedAt: string;
  emailSent: boolean;
}

// Create reusable nodemailer transporter
function getTransporter() {
  if (!config.smtp.user || !config.smtp.pass) {
    return null;
  }

  return nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });
}

export async function processEnquiry(payload: ServerContactPayload): Promise<DispatchResult> {
  const referenceId = `HTK-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  const dispatchedAt = new Date().toISOString();
  let emailSent = false;

  const maskedEmail = payload.workEmail.replace(/(.{2})(.*)(?=@)/, '$1***');
  console.log(`[ENQUIRY-RECEIVED] Ref: ${referenceId} | Type: ${payload.inquiryType} | Org: ${payload.organization} | Contact: ${maskedEmail} | At: ${dispatchedAt}`);

  const transporter = getTransporter();

  if (transporter) {
    try {
      const emailContent = `
==================================================
NEW TECHNICAL & PILOT INQUIRY: HATAK R™ PORTAL
==================================================

Reference ID: ${referenceId}
Timestamp:    ${dispatchedAt}

INQUIRER DETAILS:
- Full Name:    ${payload.fullName}
- Work Email:   ${payload.workEmail}
- Organization: ${payload.organization}
- Inquiry Type: ${payload.inquiryType}

SITE CHARACTERISTICS:
${payload.siteCharacteristics || 'Not specified'}

MESSAGE / REQUIREMENTS:
${payload.message}

==================================================
HATAK R NON LETHAL SECURITY SOLUTIONS PVT LTD
DPIIT Recognized Startup (DIPP250915)
Patent Application: 202141014878
==================================================
`;

      await transporter.sendMail({
        from: config.smtp.from,
        to: config.smtp.recipient,
        replyTo: payload.workEmail,
        subject: `[HATAK R INQUIRY] [${referenceId}] ${payload.inquiryType} - ${payload.organization}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #101827; padding: 20px; background-color: #ffffff;">
            <div style="background-color: #101827; color: #ffffff; padding: 15px; margin: -20px -20px 20px -20px;">
              <h2 style="margin: 0; color: #ffffff;">HATAK R™ Official Inquiry</h2>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #E8EDF4;">Ref: <strong>${referenceId}</strong> | ${dispatchedAt}</p>
            </div>
            
            <h3 style="color: #101827; border-bottom: 2px solid #D92E42; padding-bottom: 5px;">Inquirer Profile</h3>
            <table style="width: 100%; font-size: 14px; line-height: 1.6;">
              <tr><td style="width: 35%; font-weight: bold; color: #536174;">Full Name:</td><td>${payload.fullName}</td></tr>
              <tr><td style="font-weight: bold; color: #536174;">Work Email:</td><td><a href="mailto:${payload.workEmail}">${payload.workEmail}</a></td></tr>
              <tr><td style="font-weight: bold; color: #536174;">Organization:</td><td>${payload.organization}</td></tr>
              <tr><td style="font-weight: bold; color: #536174;">Inquiry Type:</td><td><strong>${payload.inquiryType}</strong></td></tr>
              ${payload.siteCharacteristics ? `<tr><td style="font-weight: bold; color: #536174;">Site Profile:</td><td>${payload.siteCharacteristics}</td></tr>` : ''}
            </table>

            <h3 style="color: #101827; border-bottom: 2px solid #D92E42; padding-bottom: 5px; margin-top: 20px;">Message & Technical Needs</h3>
            <div style="background: #F6F8FB; padding: 15px; border-left: 3px solid #101827; font-size: 14px; white-space: pre-wrap;">${payload.message}</div>

            <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #E8EDF4; font-size: 11px; color: #536174;">
              HATAK R NON LETHAL SECURITY SOLUTIONS PRIVATE LIMITED<br />
              DPIIT Recognition No: DIPP250915 • Patent Application: 202141014878
            </div>
          </div>
        `,
      });

      console.log(`[EMAIL-DISPATCHED] Live alert successfully sent to ${config.smtp.recipient}`);
      emailSent = true;
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error(`[EMAIL-ERROR] Failed to send email via SMTP: ${errorMsg}`);
    }
  } else {
    console.log(`[EMAIL-NOTICE] SMTP credentials not provided in .env. Inquiry logged under reference ID ${referenceId}.`);
  }

  return {
    referenceId,
    dispatchedAt,
    emailSent,
  };
}
