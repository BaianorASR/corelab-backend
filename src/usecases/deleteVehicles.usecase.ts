import { IDeleteVehiclesRepository } from '@/repositories/interfaces/IDeleteVehicles.repository';

class DeleteVehiclesUseCase {
  constructor(private repository: IDeleteVehiclesRepository) {}

  public async execute(id: number): Promise<void> {
    const oi = await this.repository.delete(id);
    console.log(oi);
    return oi as unknown as void;
  }
}

export { DeleteVehiclesUseCase };
