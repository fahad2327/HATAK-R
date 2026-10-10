import { Request, Response, NextFunction } from 'express';
import { config } from '../config/env';

export interface AppError extends Error {
  statusCode?: number;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  const requestId = req.headers['x-request-id'] || `req-${Date.now()}`;
  const statusCode = err.statusCode || 500;

  // Safe server-side audit logging without sensitive user payloads
  console.error(`[AUDIT-LOG] [${new Date().toISOString()}] [${requestId}] ${req.method} ${req.url} - Error: ${err.message}`);

  // Never leak stack traces to client
  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? 'An internal server error occurred. Please contact engineering support.' : err.message,
    requestId,
    ...(config.nodeEnv === 'development' ? { debug: err.message } : {}),
  });
};
