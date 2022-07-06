import { ICreateVehiclesData } from '@/DTOs/ICreateVehiclesData.dtos';
import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { prismaClient } from '@/database/prismaClient';

import { ICreateVehiclesRepository } from '../interfaces/ICreateVehicles.repository';

class CreateVehiclesImplementation implements ICreateVehiclesRepository {
  private vehicles = prismaClient.vehicles;

  async createVehicles(vehicle: ICreateVehiclesData): Promise<IVehicleDTOs> {
    const lastVehicleRegister = await this.vehicles.create({
      data: {
        ...vehicle,
      },
    });
    return lastVehicleRegister;
  }
}

export { CreateVehiclesImplementation };
