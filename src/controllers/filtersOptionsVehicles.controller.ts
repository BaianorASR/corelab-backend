import { Request, Response } from 'express';

import { FiltersOptionsVehiclesUseCase } from '@/usecases/filtersOptionsVehicles.usecase';

class FiltersOptionsVehiclesController {
  constructor(private useCase: FiltersOptionsVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const result = await this.useCase.execute();
    return response.status(200).json(result);
  }
}

export { FiltersOptionsVehiclesController };
