import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

export interface IGetAllVehiclesRepository {
  getAllVehicles(): Promise<IVehicleDTOs[]>;
}
