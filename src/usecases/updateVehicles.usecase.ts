import {
  IUpdateVehiclesRepository,
  IUpdateVehiclesData,
} from '@/repositories/interfaces/IUpdateVehicles.repository';

class UpdateVehiclesUseCase {
  constructor(private repository: IUpdateVehiclesRepository) {}

  public async execute(vehicleId: number, vehicles: IUpdateVehiclesData): Promise<void> {
    await this.repository.updateVehicles(vehicleId, vehicles);
  }
}

export { UpdateVehiclesUseCase };
