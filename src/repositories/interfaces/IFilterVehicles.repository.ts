import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

export interface IFilterData {
  brand?: string;
  color?: string;
  year?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface IFilterVehiclesRepository {
  filter(filters: IFilterData): Promise<IVehicleDTOs[]>;
}
