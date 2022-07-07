import { prismaClient } from '@/database/prismaClient';

import { IChangeStatusVehiclesRepository } from '../interfaces/IChangeStatusFavoriteVehicles';

class ChangeStatusVehiclesImplementation implements IChangeStatusVehiclesRepository {
  private vehicles = prismaClient.vehicles;

  public async changeStatusVehicles(vehicleId: string): Promise<boolean> {
    const lastFavoriteVehicles = await this.lastFavoriteVehicles(vehicleId);
    const vehicleUpdated = await this.vehicles.update({
      where: { id: vehicleId },
      data: {
        isFavorite: !lastFavoriteVehicles,
        updatedAt: new Date(),
      },
      select: { isFavorite: true },
    });

    return vehicleUpdated.isFavorite;
  }

  private async lastFavoriteVehicles(vehicleId: string): Promise<boolean> {
    const lastFavoriteVehicles = await this.vehicles.findUnique({
      where: { id: vehicleId },
      select: { isFavorite: true },
    });
    return lastFavoriteVehicles.isFavorite;
  }
}

export { ChangeStatusVehiclesImplementation };
