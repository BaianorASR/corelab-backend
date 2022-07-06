import { IUpdateVehiclesDTOs } from '@/DTOs/IUpdateVehicles.dtos';
import { prismaClient } from '@/database/prismaClient';

import { IUpdateVehiclesRepository } from '../interfaces/IUpdateVehicles.repository';

class UpdateVehiclesImplementation implements IUpdateVehiclesRepository {
  private vehicles = prismaClient.vehicles;

  async updateVehicles(vehicleId: string, vehicles: IUpdateVehiclesDTOs): Promise<void> {
    await this.vehicles.update({
      where: { id: vehicleId },
      data: {
        ...vehicles,
      },
    });
  }
}

export { UpdateVehiclesImplementation };
