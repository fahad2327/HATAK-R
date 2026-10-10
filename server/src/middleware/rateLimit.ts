import rateLimit from 'express-rate-limit';

export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === 'test' ? 1000 : 5, // 5 requests per 15 mins in production
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Rate limit exceeded: too many contact submissions from this IP. Please try again after 15 minutes.',
  },
  handler: (_req, res, _next, options) => {
    res.status(429).json(options.message);
  },
});
