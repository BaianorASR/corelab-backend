import { Request, Response } from 'express';
import StatusCode from 'http-status';

import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { GetAllVehiclesUseCase } from '@/usecases/getAllVehicles.usecase';

class GetAllVehiclesController {
  constructor(private useCase: GetAllVehiclesUseCase) {}

  public async handle(req: Request, res: Response) {
    const result: IVehicleDTOs[] = await this.useCase.execute();
    return res.status(StatusCode.OK).json(result);
  }
}

export { GetAllVehiclesController };
