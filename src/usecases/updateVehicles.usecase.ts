import { IUpdateVehiclesDTOs } from '@/DTOs/IUpdateVehicles.dtos';
import { IUpdateVehiclesRepository } from '@/repositories/interfaces/IUpdateVehicles.repository';

class UpdateVehiclesUseCase {
  constructor(private repository: IUpdateVehiclesRepository) {}

  public async execute(vehicleId: string, vehicles: IUpdateVehiclesDTOs): Promise<void> {
    await this.repository.updateVehicles(vehicleId, vehicles);
  }
}

export { UpdateVehiclesUseCase };
