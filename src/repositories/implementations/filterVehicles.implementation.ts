import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { prismaClient } from '@/database/prismaClient';

import {
  IFilterData,
  IFilterVehiclesRepository,
} from '../interfaces/IFilterVehicles.repository';

export class FilterVehiclesImplementation implements IFilterVehiclesRepository {
  private vehicles = prismaClient.vehicles;

  async filter({
    brand,
    color,
    year,
    maxPrice,
    minPrice,
  }: IFilterData): Promise<IVehicleDTOs[]> {
    const filteredVehicles = await this.vehicles.findMany({
      where: {
        brand: { contains: brand },
        color: { contains: color },
        year: { contains: year },
        price: {
          gte: minPrice ? +minPrice : undefined,
          lte: maxPrice ? +maxPrice : undefined,
        },
      },
    });

    return filteredVehicles;
  }
}
