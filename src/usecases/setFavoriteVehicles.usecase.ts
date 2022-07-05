import { ISetFavoriteVehiclesRepository } from '@/repositories/interfaces/ISetFavoriteVehicles.repository';

class SetFavoriteVehiclesUseCase {
  constructor(private repository: ISetFavoriteVehiclesRepository) {}

  public async execute(id: number): Promise<void> {
    await this.repository.setFavoriteVehicles(id);
  }
}

export { SetFavoriteVehiclesUseCase };
