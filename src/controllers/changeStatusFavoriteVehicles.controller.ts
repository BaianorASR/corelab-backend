import { Request, Response } from 'express';

import { StatusCodes } from '@/configs/StatusCodes';
import { ChangeStatusVehiclesUseCase } from '@/usecases/changeStatusFavoriteVehicles.usecase';

class ChangeStatusVehiclesController {
  constructor(private useCase: ChangeStatusVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const favoriteStatus = await this.useCase.execute(id);
    return response
      .status(StatusCodes.OK)
      .json({ message: 'Vehicle favorite status changed successfully', favoriteStatus });
  }
}

export { ChangeStatusVehiclesController };
