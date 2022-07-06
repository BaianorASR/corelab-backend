import { IUpdateVehiclesDTOs } from '@/DTOs/IUpdateVehicles.dtos';

interface IUpdateVehiclesRepository {
  updateVehicles: (vehicleId: string, vehicles: IUpdateVehiclesDTOs) => Promise<void>;
}

export { IUpdateVehiclesRepository };
