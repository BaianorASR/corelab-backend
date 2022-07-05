import { prismaClient } from '@/database/prismaClient';

import {
  IUpdateVehiclesData,
  IUpdateVehiclesRepository,
} from '../interfaces/IUpdateVehicles.repository';

class UpdateVehiclesImplementation implements IUpdateVehiclesRepository {
  vehicles = prismaClient.vehicles;

  async updateVehicles(vehicleId: string, vehicles: IUpdateVehiclesData): Promise<void> {
    await this.vehicles.update({
      where: { id: vehicleId },
      data: {
        ...vehicles,
      },
    });
  }
}

export { UpdateVehiclesImplementation };
