import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

interface ICreateVehiclesData {
  name: string;
  description: string;
  plate: string;
  year: number;
  color: string;
  price: number;
}

interface ICreateVehiclesRepository {
  createVehicles: (vehicle: ICreateVehiclesData) => Promise<IVehicleDTOs>;
}

export { ICreateVehiclesRepository, ICreateVehiclesData };
