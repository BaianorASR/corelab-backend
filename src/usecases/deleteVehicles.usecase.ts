import { IDeleteVehiclesRepository } from '@/repositories/interfaces/IDeleteVehicles.repository';

class DeleteVehiclesUseCase {
  constructor(private repository: IDeleteVehiclesRepository) {}

  public async execute(vehicleId: string): Promise<void> {
    await this.repository.delete(vehicleId);
  }
}

export { DeleteVehiclesUseCase };
