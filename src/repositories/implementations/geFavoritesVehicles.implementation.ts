import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { prismaClient } from '@/database/prismaClient';

import { IGetFavoritesVehiclesRepository } from '../interfaces/IGetFavoritesVehicles.repository';

export class GetFavoritesVehiclesImplementation
  implements IGetFavoritesVehiclesRepository
{
  private vehicles = prismaClient.vehicles;

  public async getFavoritesVehicles(): Promise<IVehicleDTOs[]> {
    const vehicles = await this.vehicles.findMany({
      where: {
        isFavorite: true,
      },
    });

    return vehicles;
  }
}
