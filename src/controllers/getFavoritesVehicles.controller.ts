import { Request, Response } from 'express';

import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { StatusCodes } from '@/configs/StatusCodes';
import { GetFavoritesVehiclesUseCase } from '@/usecases/getFavoritesVehicles.usecase';

export class GetFavoritesVehiclesController {
  constructor(private useCase: GetFavoritesVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const result: IVehicleDTOs[] = await this.useCase.execute();
    return response.status(StatusCodes.OK).json(result);
  }
}
