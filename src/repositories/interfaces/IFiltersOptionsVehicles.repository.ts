import { IFiltersOptionsDTOs } from '@/DTOs/IFiltersOptions.dtos';

export interface IFiltersOptionsVehiclesRepository {
  getFilterOptions(): Promise<IFiltersOptionsDTOs>;
}
