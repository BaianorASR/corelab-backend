import { ICreateVehiclesDTOs } from '@/DTOs/ICreateVehicles.dtos';
import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { ICreateVehiclesRepository } from '@/repositories/interfaces/ICreateVehicles.repository';

class CreateVehiclesUseCase {
  constructor(private repository: ICreateVehiclesRepository) {}

  public async execute(vehicle: ICreateVehiclesDTOs): Promise<IVehicleDTOs> {
    const lastVehicleRegister = await this.repository.createVehicles(vehicle);
    return lastVehicleRegister;
  }
}

export { CreateVehiclesUseCase };
