import { ISetFavoriteVehiclesRepository } from '@/repositories/interfaces/ISetFavoriteVehicles.repository';

class SetFavoriteVehiclesUseCase {
  constructor(private repository: ISetFavoriteVehiclesRepository) {}

  public async execute(vehicleId: string): Promise<void> {
    await this.repository.setFavoriteVehicles(vehicleId);
  }
}

export { SetFavoriteVehiclesUseCase };
