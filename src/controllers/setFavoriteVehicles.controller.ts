import { Request, Response } from 'express';

import { StatusCodes } from '@/configs/StatusCodes';
import { SetFavoriteVehiclesUseCase } from '@/usecases/setFavoriteVehicles.usecase';

class SetFavoriteVehiclesController {
  constructor(private useCase: SetFavoriteVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    await this.useCase.execute(id);
    return response
      .status(StatusCodes.OK)
      .json({ message: 'Vehicle favorite status changed successfully' });
  }
}

export { SetFavoriteVehiclesController };
