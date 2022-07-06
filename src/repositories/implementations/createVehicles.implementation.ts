import { ICreateVehiclesData } from '@/DTOs/ICreateVehiclesData.dtos';
import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { StatusCodes } from '@/configs/StatusCodes';
import { prismaClient } from '@/database/prismaClient';
import { HttpException } from '@/errors/HttpException';

import { ICreateVehiclesRepository } from '../interfaces/ICreateVehicles.repository';

class CreateVehiclesImplementation implements ICreateVehiclesRepository {
  private vehicles = prismaClient.vehicles;

  async createVehicles(vehicle: ICreateVehiclesData): Promise<IVehicleDTOs> {
    await this.verifyIfVehicleExist(vehicle.name);
    const lastVehicleRegister = await this.vehicles.create({
      data: {
        ...vehicle,
      },
    });
    return lastVehicleRegister;
  }

  private async verifyIfVehicleExist(vehicleName: string) {
    const vehicle = await this.vehicles.findUnique({ where: { name: vehicleName } });
    if (vehicle)
      throw new HttpException(StatusCodes.BAD_REQUEST, 'Vehicle Already Exist');
  }
}

export { CreateVehiclesImplementation };
