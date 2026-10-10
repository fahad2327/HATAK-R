import { ServerContactPayload } from '../schemas/contact.schema';
import { config } from '../config/env';

export interface DispatchResult {
  referenceId: string;
  dispatchedAt: string;
}

export async function processEnquiry(payload: ServerContactPayload): Promise<DispatchResult> {
  const referenceId = `HTK-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  const dispatchedAt = new Date().toISOString();

  // Audit-safe log: records timestamp, inquiry category, and masked email without logging full personal message
  const maskedEmail = payload.workEmail.replace(/(.{2})(.*)(?=@)/, '$1***');
  console.log(`[ENQUIRY-RECEIVED] Ref: ${referenceId} | Type: ${payload.inquiryType} | Org: ${payload.organization} | Contact: ${maskedEmail} | At: ${dispatchedAt}`);

  // In production, when SMTP credentials exist, an email provider would be triggered here
  if (config.smtp.host && config.smtp.user) {
    // Dispatch via configured SMTP provider
  }

  return {
    referenceId,
    dispatchedAt,
  };
}
