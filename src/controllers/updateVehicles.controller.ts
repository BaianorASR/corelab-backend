import { Request, Response } from 'express';

import { IUpdateVehiclesDTOs } from '@/DTOs/IUpdateVehicles.dtos';
import { StatusCodes } from '@/configs/StatusCodes';
import { UpdateVehiclesUseCase } from '@/usecases/updateVehicles.usecase';

class UpdateVehiclesController {
  constructor(private useCase: UpdateVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const { id } = request.params;
    const vehicles = this.getVehicleInBody(request);

    await this.useCase.execute(id, vehicles);
    return response
      .status(StatusCodes.NO_CONTENT)
      .json({ message: 'Vehicle updated successfully' });
  }

  private getVehicleInBody({ body }: Request): IUpdateVehiclesDTOs {
    return {
      name: body.name,
      brand: body.brand,
      description: body.description,
      plate: body.plate,
      year: body.year,
      color: body.color,
      price: body.price,
    };
  }
}

export { UpdateVehiclesController };
