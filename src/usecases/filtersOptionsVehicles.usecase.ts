import { IFiltersOptionsDTOs } from '@/DTOs/IFiltersOptions.dtos';
import { IFiltersOptionsVehiclesRepository } from '@/repositories/interfaces/IFiltersOptionsVehicles.repository';

export class FiltersOptionsVehiclesUseCase {
  constructor(private repository: IFiltersOptionsVehiclesRepository) {}

  public async execute(): Promise<IFiltersOptionsDTOs> {
    const filtersOptions = this.repository.getFilterOptions();
    return filtersOptions;
  }
}
