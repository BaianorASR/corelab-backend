import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

interface IGetAllVehiclesRepository {
  getAllVehicles(): Promise<IVehicleDTOs[]>;
}

export { IGetAllVehiclesRepository };
