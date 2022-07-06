import { Request, Response } from 'express';

import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { StatusCodes } from '@/configs/StatusCodes';
import { GetAllVehiclesUseCase } from '@/usecases/getAllVehicles.usecase';

class GetAllVehiclesController {
  constructor(private useCase: GetAllVehiclesUseCase) {}

  public async handle(req: Request, res: Response) {
    const result: IVehicleDTOs[] = await this.useCase.execute();
    return res.status(StatusCodes.OK).json(result);
  }
}

export { GetAllVehiclesController };
