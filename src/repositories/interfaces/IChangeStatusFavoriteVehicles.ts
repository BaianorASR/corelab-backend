interface IChangeStatusVehiclesRepository {
  changeStatusVehicles(vehicleId: string): Promise<boolean>;
}

export { IChangeStatusVehiclesRepository };
