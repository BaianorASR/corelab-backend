import { Request, Response } from 'express';

import { SetFavoriteVehiclesUseCase } from '@/usecases/setFavoriteVehicles.usecase';

class SetFavoriteVehiclesController {
  constructor(private useCase: SetFavoriteVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const result = await this.useCase.execute(Number(id));
    return response.status(200).json(result);
  }
}

export { SetFavoriteVehiclesController };
