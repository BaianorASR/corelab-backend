import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { prismaClient } from '@/database/prismaClient';

import { ISearchVehicleRepository } from '../interfaces/ISearchVehicle.repository';

interface ITest {
  where: {
    OR: { [key: string]: { [key: string]: string | number } }[];
  };
}

export class SearchVehiclesImplementation implements ISearchVehicleRepository {
  private vehicles = prismaClient.vehicles;
  searchVehicle(query: string): Promise<IVehicleDTOs[]> {
    const ARGS: ITest = {
      where: {
        OR: [
          { name: { contains: query } },
          { brand: { contains: query } },
          { description: { contains: query } },
          { plate: { contains: query } },
          { year: { contains: query } },
          { color: { contains: query } },
        ],
      },
    };

    if (!Number.isNaN(+query)) {
      ARGS.where.OR = [...ARGS.where.OR, { price: { equals: +query } }];
    }

    const vehicles = this.vehicles.findMany(ARGS);

    return vehicles;
  }
}
