import { IFiltersOptionsDTOs } from '@/DTOs/IFiltersOptions.dtos';
import { prismaClient } from '@/database/prismaClient';

import { IFiltersOptionsVehiclesRepository } from '../interfaces/IFiltersOptionsVehicles.repository';

interface IOptionsArray {
  [key: string]: string;
}

export class FiltersOptionsVehiclesImplementation
  implements IFiltersOptionsVehiclesRepository
{
  private vehicles = prismaClient.vehicles;

  public async getFilterOptions(): Promise<IFiltersOptionsDTOs> {
    const [brand, year, color] = await prismaClient.$transaction([
      this.vehicles.findMany({
        select: { brand: true },
        distinct: ['brand'],
        orderBy: { brand: 'asc' },
      }),
      this.vehicles.findMany({
        select: { year: true },
        distinct: ['year'],
        orderBy: { year: 'desc' },
      }),
      this.vehicles.findMany({
        select: { color: true },
        distinct: ['color'],
        orderBy: { color: 'asc' },
      }),
    ]);

    const filtersResults = {
      brands: this.makeArray('brand', brand),
      years: this.makeArray('year', year),
      colors: this.makeArray('color', color),
    };

    return filtersResults;
  }

  private makeArray(name: string, filters: IOptionsArray[]) {
    const result = filters.map(filter => filter[name]);
    return result;
  }
}
