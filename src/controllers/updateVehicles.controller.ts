import { IUpdateVehiclesData } from '@/repositories/interfaces/IUpdateVehicles.repository';
import { UpdateVehiclesUseCase } from '@/usecases/updateVehicles.usecase';
import { Request, Response } from 'express';

class UpdateVehiclesController {
  constructor(private useCase: UpdateVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const { id } = request.params;
    const vehicles = this.getVehicleInBody(request);

    const result = await this.useCase.execute(Number(id), vehicles);
    return response.status(200).json(result);
  }

  private getVehicleInBody({ body }: Request): IUpdateVehiclesData {
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

export { UpdateVehiclesController };
