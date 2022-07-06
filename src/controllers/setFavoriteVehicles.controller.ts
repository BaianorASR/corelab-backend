import { Request, Response } from 'express';

import { StatusCodes } from '@/configs/StatusCodes';
import { SetFavoriteVehiclesUseCase } from '@/usecases/setFavoriteVehicles.usecase';

class SetFavoriteVehiclesController {
  constructor(private useCase: SetFavoriteVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const result = await this.useCase.execute(id);
    return response.status(StatusCodes.OK).json(result);
  }
}

export { SetFavoriteVehiclesController };
