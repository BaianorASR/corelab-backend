import { prismaClient } from '@/database/prismaClient';

import { ISetFavoriteVehiclesRepository } from '../interfaces/ISetFavoriteVehicles.repository';

class SetFavoriteVehiclesImplementation implements ISetFavoriteVehiclesRepository {
  vehicles = prismaClient.vehicles;

  public async setFavoriteVehicles(id: number): Promise<void> {
    const lastFavoriteVehicles = await this.lastFavoriteVehicles(id);
    await this.vehicles.update({
      where: { id },
      data: {
        isFavorite: !lastFavoriteVehicles,
      },
    });
  }

  private async lastFavoriteVehicles(id: number): Promise<boolean> {
    const lastFavoriteVehicles = await this.vehicles.findUnique({
      where: { id },
      select: { isFavorite: true },
    });
    return lastFavoriteVehicles.isFavorite;
  }
}

export { SetFavoriteVehiclesImplementation };
