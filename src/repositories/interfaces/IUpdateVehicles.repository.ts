import { IUpdateVehiclesDTOs } from '@/DTOs/IUpdateVehicles.dtos';

export interface IUpdateVehiclesRepository {
  updateVehicles: (vehicleId: string, vehicles: IUpdateVehiclesDTOs) => Promise<void>;
}
