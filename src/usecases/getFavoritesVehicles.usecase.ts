import { IVehicleDTOs } from '@/DTOs/IVehicles.dtos';
import { IGetFavoritesVehiclesRepository } from '@/repositories/interfaces/IGetFavoritesVehicles.repository';

export class GetFavoritesVehiclesUseCase {
  constructor(
    private readonly getFavoritesVehiclesRepository: IGetFavoritesVehiclesRepository,
  ) {}

  public async execute(): Promise<IVehicleDTOs[]> {
    const favoritesVehicles =
      await this.getFavoritesVehiclesRepository.getFavoritesVehicles();
    return favoritesVehicles;
  }
}
