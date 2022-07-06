import { ICreateVehiclesDTOs } from '@/DTOs/ICreateVehicles.dtos';
import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

interface ICreateVehiclesRepository {
  createVehicles: (vehicle: ICreateVehiclesDTOs) => Promise<IVehicleDTOs>;
}

export { ICreateVehiclesRepository };
