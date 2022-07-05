import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { prismaClient } from '@/database/prismaClient';

import { IGetAllVehiclesRepository } from '../interfaces/IGetAllVehicles.repository';

class GetAllVehiclesImplementation implements IGetAllVehiclesRepository {
  private vehicles = prismaClient.vehicles;

  async getAllVehicles(): Promise<IVehicleDTOs[]> {
    const allVehicles = await this.vehicles.findMany();
    return allVehicles;
  }
}

export { GetAllVehiclesImplementation };
