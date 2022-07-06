import { IUpdateVehiclesData } from '@/DTOs/IUpdateVehiclesData.dtos';

interface IUpdateVehiclesRepository {
  updateVehicles: (vehicleId: string, vehicles: IUpdateVehiclesData) => Promise<void>;
}

export { IUpdateVehiclesRepository };
