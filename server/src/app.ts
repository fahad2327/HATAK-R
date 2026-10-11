import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/env';
import contactRoutes from './routes/contact.routes';
import { errorHandler } from './middleware/errorHandler';

export const app = express();

// Security headers via Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:', 'svg+xml'],
        connectSrc: ["'self'", ...config.allowedOrigins],
        frameAncestors: ["'none'"],
      },
    },
    frameguard: { action: 'deny' },
    noSniff: true,
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  })
);

// Restricted CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server) in development or testing
      if (!origin) return callback(null, true);

      if (config.allowedOrigins.includes(origin) || !config.isProd) {
        callback(null, true);
      } else {
        callback(new Error('Cross-Origin Request Blocked by Security Policy'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  })
);

// Body parser with strict byte limits
app.use(express.json({ limit: '50kb' }));

// Root API endpoint
app.get(['/api', '/'], (_req, res) => {
  res.status(200).json({
    name: 'Hatak R Enquiry API',
    status: 'operational',
    endpoints: ['/api/health', '/api/contact'],
  });
});

// Health check endpoint
app.get(['/api/health', '/health'], (_req, res) => {
  res.status(200).json({
    status: 'operational',
    service: 'hatak-r-enquiry-api',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Mount Routes (supporting both /api/contact and stripped /contact)
app.use('/api/contact', contactRoutes);
app.use('/contact', contactRoutes);

// Central error handler
app.use(errorHandler);

// Server startup (only if run directly, not in test or Vercel serverless)
if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  const server = app.listen(config.port, () => {
    console.log(`[HATAK-R-API] Server running securely on http://localhost:${config.port} (${config.nodeEnv})`);
  });

  const shutdown = () => {
    console.log('[HATAK-R-API] Initiating graceful termination...');
    server.close(() => {
      console.log('[HATAK-R-API] Connections closed. Process exiting.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

export default app;
