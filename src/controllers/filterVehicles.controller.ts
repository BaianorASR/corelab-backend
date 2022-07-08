import { Request, Response } from 'express';

import { StatusCodes } from '@/configs/StatusCodes';
import { IFilterData } from '@/repositories/interfaces/IFilterVehicles.repository';
import { FilterVehiclesUsecase } from '@/usecases/filterVehicles.usecase';

export class FilterVehiclesController {
  constructor(private readonly filterVehiclesUsecase: FilterVehiclesUsecase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const filters: IFilterData = request.body;
    const filteredVehicles = await this.filterVehiclesUsecase.filter(filters);
    return response.status(StatusCodes.OK).json(filteredVehicles);
  }
}
