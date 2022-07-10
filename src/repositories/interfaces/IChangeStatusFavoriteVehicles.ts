export interface IChangeStatusVehiclesRepository {
  changeStatusVehicles(vehicleId: string): Promise<boolean>;
}
