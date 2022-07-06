import { IUpdateVehiclesData } from '@/DTOs/IUpdateVehiclesData.dtos';
import { IUpdateVehiclesRepository } from '@/repositories/interfaces/IUpdateVehicles.repository';

class UpdateVehiclesUseCase {
  constructor(private repository: IUpdateVehiclesRepository) {}

  public async execute(vehicleId: string, vehicles: IUpdateVehiclesData): Promise<void> {
    await this.repository.updateVehicles(vehicleId, vehicles);
  }
}

export { UpdateVehiclesUseCase };
