import { Request, Response } from 'express';
import StatusCode from 'http-status';

import { ICreateVehiclesData } from '@/repositories/interfaces/ICreateVehicles.repository';
import { CreateVehiclesUseCase } from '@/usecases/createVehicles.usecase';

class CreateController {
  constructor(private useCase: CreateVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const vehicle = this.getVehicleInBody(request);
    const lastVehicleRegister = await this.useCase.execute(vehicle);
    return response.status(StatusCode.CREATED).json(lastVehicleRegister);
  }

  private getVehicleInBody({ body }: Request): ICreateVehiclesData {
    return {
      name: body.name,
      description: body.description,
      plate: body.plate,
      year: body.year,
      color: body.color,
      price: body.price,
    };
  }
}

export { CreateController };
