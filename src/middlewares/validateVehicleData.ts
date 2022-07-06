import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

import { ICreateVehiclesData } from '@/DTOs/ICreateVehiclesData.dtos';
import { IUpdateVehiclesData } from '@/DTOs/IUpdateVehiclesData.dtos';
import { StatusCodes } from '@/configs/StatusCodes';
import { HttpException } from '@/errors/HttpException';

class ValidateVehicleData {
  public static async validate(req: Request, res: Response, next: NextFunction) {
    const { name, description, plate, year, color, price } = req.body;
    const ObjectToValidate =
      req.method === 'POST' ? ICreateVehiclesData : IUpdateVehiclesData;

    const data = new ObjectToValidate(name, description, plate, year, color, price);

    const errors = await validate(data);
    if (errors.length > 0) {
      throw new HttpException(StatusCodes.BAD_REQUEST, `${errors}`);
    }

    return next();
  }
}

const validateVehicleData = ValidateVehicleData.validate;
export { validateVehicleData };
