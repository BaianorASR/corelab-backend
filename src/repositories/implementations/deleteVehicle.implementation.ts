import { prismaClient } from '@/database/prismaClient';

import { IDeleteVehiclesRepository } from '../interfaces/IDeleteVehicles.repository';

class DeleteVehiclesImplementation implements IDeleteVehiclesRepository {
  private vehicles = prismaClient.vehicles;

  async delete(vehicleId: string): Promise<void> {
    await this.vehicles.delete({ where: { id: vehicleId } });
  }
}

export { DeleteVehiclesImplementation };
