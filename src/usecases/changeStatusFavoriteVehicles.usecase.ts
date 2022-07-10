import { IChangeStatusVehiclesRepository } from '@/repositories/interfaces/IChangeStatusFavoriteVehicles';

class ChangeStatusVehiclesUseCase {
  constructor(private repository: IChangeStatusVehiclesRepository) {}

  public async execute(vehicleId: string): Promise<boolean> {
    const favoriteStatus = await this.repository.changeStatusVehicles(vehicleId);
    return favoriteStatus;
  }
}

export { ChangeStatusVehiclesUseCase };
