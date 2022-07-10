import { ICreateVehiclesDTOs } from '@/DTOs/ICreateVehicles.dtos';
import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

export interface ICreateVehiclesRepository {
  createVehicles: (vehicle: ICreateVehiclesDTOs) => Promise<IVehicleDTOs>;
}
