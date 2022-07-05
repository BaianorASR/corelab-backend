import { prismaClient } from '@/database/prismaClient';

import {
  IUpdateVehiclesData,
  IUpdateVehiclesRepository,
} from '../interfaces/IUpdateVehicles.repository';

class UpdateVehiclesImplementation implements IUpdateVehiclesRepository {
  vehicles = prismaClient.vehicles;

  async updateVehicles(id: number, vehicles: IUpdateVehiclesData): Promise<void> {
    await this.vehicles.update({
      where: { id },
      data: {
        ...vehicles,
      },
    });
  }
}

export { UpdateVehiclesImplementation };
