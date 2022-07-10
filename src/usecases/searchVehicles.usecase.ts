import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { ISearchVehicleRepository } from '@/repositories/interfaces/ISearchVehicle.repository';

export class SearchVehiclesUseCase {
  constructor(private readonly searchVehicleRepository: ISearchVehicleRepository) {}

  async execute(query: string): Promise<IVehicleDTOs[]> {
    const vehicles = await this.searchVehicleRepository.searchVehicle(query);
    return vehicles;
  }
}
