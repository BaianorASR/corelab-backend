import { prismaClient } from '@/database/prismaClient';

import { ISetFavoriteVehiclesRepository } from '../interfaces/ISetFavoriteVehicles.repository';

class SetFavoriteVehiclesImplementation implements ISetFavoriteVehiclesRepository {
  vehicles = prismaClient.vehicles;

  public async setFavoriteVehicles(vehicleId: string): Promise<void> {
    const lastFavoriteVehicles = await this.lastFavoriteVehicles(vehicleId);
    await this.vehicles.update({
      where: { id: vehicleId },
      data: {
        isFavorite: !lastFavoriteVehicles,
      },
    });
  }

  private async lastFavoriteVehicles(vehicleId: string): Promise<boolean> {
    const lastFavoriteVehicles = await this.vehicles.findUnique({
      where: { id: vehicleId },
      select: { isFavorite: true },
    });
    return lastFavoriteVehicles.isFavorite;
  }
}

export { SetFavoriteVehiclesImplementation };
