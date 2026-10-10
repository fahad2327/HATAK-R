import { Router, Request, Response } from 'express';
import { serverContactSchema, ServerContactPayload } from '../schemas/contact.schema';
import { validateBody } from '../middleware/validate';
import { contactRateLimiter } from '../middleware/rateLimit';
import { processEnquiry } from '../services/mail.service';

const router = Router();

router.post(
  '/',
  contactRateLimiter,
  validateBody(serverContactSchema),
  async (req: Request, res: Response): Promise<void> => {
    const payload = req.body as ServerContactPayload;

    // Honeypot spam defense: If bot filled the hidden field, silently reject
    if (payload.websiteUrl && payload.websiteUrl.length > 0) {
      res.status(400).json({
        success: false,
        message: 'Submission rejected by anti-automation filter.',
      });
      return;
    }

    try {
      const result = await processEnquiry(payload);

      res.status(200).json({
        success: true,
        message: 'Inquiry received and queued for systems engineering review.',
        data: {
          referenceId: result.referenceId,
          timestamp: result.dispatchedAt,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unable to process inquiry at this moment. Please email our engineering desk directly.',
      });
    }
  }
);

export default router;
