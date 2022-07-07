import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

export interface ISearchVehicleRepository {
  searchVehicle(query: string): Promise<IVehicleDTOs[]>;
}
