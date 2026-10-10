import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validateBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const parsed = await schema.parseAsync(req.body);
      req.body = parsed;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Record<string, string[]> = {};
        error.errors.forEach((err) => {
          const key = err.path.join('.') || 'root';
          if (!fieldErrors[key]) {
            fieldErrors[key] = [];
          }
          fieldErrors[key].push(err.message);
        });

        res.status(400).json({
          success: false,
          message: 'Validation failed: one or more submitted fields are invalid.',
          errors: fieldErrors,
        });
        return;
      }
      next(error);
    }
  };
};
