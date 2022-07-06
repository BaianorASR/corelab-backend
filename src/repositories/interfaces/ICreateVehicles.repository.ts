import { ICreateVehiclesData } from '@/DTOs/ICreateVehiclesData.dtos';
import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

interface ICreateVehiclesRepository {
  createVehicles: (vehicle: ICreateVehiclesData) => Promise<IVehicleDTOs>;
}

export { ICreateVehiclesRepository };
