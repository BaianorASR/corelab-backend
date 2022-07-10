import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

import { ICreateVehiclesDTOs } from '@/DTOs/ICreateVehicles.dtos';
import { IUpdateVehiclesDTOs } from '@/DTOs/IUpdateVehicles.dtos';
import { StatusCodes } from '@/configs/StatusCodes';
import { HttpException } from '@/errors/HttpException';

class ValidateVehicleData {
  public async validate(req: Request, res: Response, next: NextFunction) {
    const { name, description, plate, year, color, price, brand } = req.body;

    const METHODS_CLASS_DATA = {
      POST: ICreateVehiclesDTOs,
      PUT: IUpdateVehiclesDTOs,
    };

    const ObjectToValidate = METHODS_CLASS_DATA[req.method];
    const data = new ObjectToValidate(
      name,
      brand,
      description,
      plate,
      year,
      color,
      price,
    );
    const errors = await validate(data);

    if (errors.length > 0) {
      throw new HttpException(StatusCodes.BAD_REQUEST, `${errors}`);
    }

    return next();
  }
}

const validateVehicleData = new ValidateVehicleData().validate;
export { validateVehicleData };
