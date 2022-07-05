import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { GetAllVehiclesUseCase } from '@/usecases/getAllVehicles.usecase';
import { Request, Response } from 'express';

class GetAllVehiclesController {
  constructor(private useCase: GetAllVehiclesUseCase) {}

  public async handle(req: Request, res: Response) {
    console.log('GetAllVehiclesController');
    const result: IVehicleDTOs[] = await this.useCase.execute();
    return res.status(200).json(result);
  }
}

export { GetAllVehiclesController };
