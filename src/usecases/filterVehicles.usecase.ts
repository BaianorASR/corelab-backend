import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import {
  IFilterData,
  IFilterVehiclesRepository,
} from '@/repositories/interfaces/IFilterVehicles.repository';

export class FilterVehiclesUsecase {
  constructor(private readonly filterVehiclesRepository: IFilterVehiclesRepository) {}

  public async filter(filters: IFilterData): Promise<IVehicleDTOs[]> {
    const filteredVehicles = this.filterVehiclesRepository.filter(filters);
    return filteredVehicles;
  }
}
