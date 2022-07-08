import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { prismaClient } from '@/database/prismaClient';

import {
  IFilterData,
  IFilterVehiclesRepository,
} from '../interfaces/IFilterVehicles.repository';

export class FilterVehiclesImplementation implements IFilterVehiclesRepository {
  private vehicles = prismaClient.vehicles;

  async filter(filters: IFilterData): Promise<IVehicleDTOs[]> {
    const filteredVehicles = await this.vehicles.findMany({
      where: {
        brand: filters.brand,
        color: filters.color,
        year: filters.year,
        price: {
          gte: filters.minPrice,
          lte: filters.maxPrice,
        },
      },
    });

    return filteredVehicles;
  }
}
