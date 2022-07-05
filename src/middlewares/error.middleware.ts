import { NextFunction, Request, Response } from 'express';
import StatusCode from 'http-status';

import { HttpException } from '@errors/HttpException';
import { logger } from '@utils/logger';

const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const status: number = error.status || StatusCode.INTERNAL_SERVER_ERROR;
    const message: string = error.message || 'Something went wrong';
    logger.error(
      `[${req.method}] ${req.path} >> \nStatusCode:: ${status}, \nMessage:: ${message}`,
    );
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
