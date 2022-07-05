import { IDeleteVehiclesRepository } from '@/repositories/interfaces/IDeleteVehicles.repository';

class DeleteVehiclesUseCase {
  constructor(private repository: IDeleteVehiclesRepository) {}

  public async execute(vehicleId: string): Promise<void> {
    const oi = await this.repository.delete(vehicleId);
    console.log(oi);
    return oi as unknown as void;
  }
}

export { DeleteVehiclesUseCase };
