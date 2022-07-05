import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { IGetAllVehiclesRepository } from '@/repositories/interfaces/IGetAllVehicles.repository';

class GetAllVehiclesUseCase {
  constructor(private repository: IGetAllVehiclesRepository) {}

  public async execute(): Promise<IVehicleDTOs[]> {
    const allVehicles = await this.repository.getAllVehicles()
    return allVehicles
  }
}

export { GetAllVehiclesUseCase }
