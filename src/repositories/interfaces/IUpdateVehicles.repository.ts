import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';

interface IUpdateVehiclesData {
  name: string;
  description: string;
  plate: string;
  year: number;
  color: string;
  price: number;
}

interface IUpdateVehiclesRepository {
  updateVehicles: (vehicleId: number, vehicles: IUpdateVehiclesData) => Promise<void>;
}

export { IUpdateVehiclesRepository, IUpdateVehiclesData };
