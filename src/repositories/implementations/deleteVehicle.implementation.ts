import { prismaClient } from '@/database/prismaClient';

import { IDeleteVehiclesRepository } from '../interfaces/IDeleteVehicles.repository';

class DeleteVehiclesImplementation implements IDeleteVehiclesRepository {
  vehicles = prismaClient.vehicles;

  async delete(id: number): Promise<void> {
    await this.vehicles.delete({ where: { id } });
  }
}

export { DeleteVehiclesImplementation };
