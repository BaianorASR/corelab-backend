import { Request, Response } from 'express';

import { SearchVehiclesUseCase } from '@/usecases/searchVehicles.usecase';

class SearchVehiclesController {
  constructor(private useCase: SearchVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const { query } = request.query;

    const result = await this.useCase.execute(query as string);
    return response.status(200).json(result);
  }
}

export { SearchVehiclesController };
