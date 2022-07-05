import { NextFunction, Request, Response } from 'express';

import { prismaClient } from '@/database/prismaClient';
import { HttpException } from '@/errors/HttpException';

class VerifyIfVehicleExist {
  public async validate(request: Request, response: Response, next: NextFunction) {
    const { vehicles } = prismaClient;
    const { id } = request.params;
    const vehicle = await vehicles.findUnique({ where: { id: Number(id) } });

    if (!vehicle) throw new HttpException(404, 'Vehicle not found');
    next();
  }
}

export const verifyIfVehicleExist = new VerifyIfVehicleExist().validate;
