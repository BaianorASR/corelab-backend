import { Request, Response } from 'express';

import { ICreateVehiclesDTOs } from '@/DTOs/ICreateVehicles.dtos';
import { StatusCodes } from '@/configs/StatusCodes';
import { CreateVehiclesUseCase } from '@/usecases/createVehicles.usecase';

class CreateController {
  constructor(private useCase: CreateVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const vehicle = this.getVehicleInBody(request);
    const lastVehicleRegister = await this.useCase.execute(vehicle);
    return response.status(StatusCodes.CREATED).json(lastVehicleRegister);
  }

  private getVehicleInBody({ body }: Request): ICreateVehiclesDTOs {
    const data: ICreateVehiclesDTOs = {
      name: body.name,
      description: body.description,
      plate: body.plate,
      year: body.year,
      color: body.color,
      price: body.price,
    };

    return data;
  }
}

export { CreateController };
