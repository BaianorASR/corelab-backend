import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { prismaClient } from '@/database/prismaClient';

import {
  ICreateVehiclesData,
  ICreateVehiclesRepository,
} from '../interfaces/ICreateVehicles.repository';

class CreateVehiclesImplementation implements ICreateVehiclesRepository {
  vehicles = prismaClient.vehicles;

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
