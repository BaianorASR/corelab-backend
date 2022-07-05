import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import {
  ICreateVehiclesData,
  ICreateVehiclesRepository,
} from '@/repositories/interfaces/ICreateVehicles.repository';

class CreateVehiclesUseCase {
  constructor(private repository: ICreateVehiclesRepository) {}

  public async execute(vehicle: ICreateVehiclesData): Promise<IVehicleDTOs> {
    const lastVehicleRegister = await this.repository.createVehicles(vehicle);
    return lastVehicleRegister;
  }
}

export { CreateVehiclesUseCase };