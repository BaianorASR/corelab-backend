import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

export interface IGetFavoritesVehiclesRepository {
  getFavoritesVehicles(): Promise<IVehicleDTOs[]>;
}
