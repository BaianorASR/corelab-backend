export interface IDeleteVehiclesRepository {
  delete(vehicleId: string): Promise<void>;
}
