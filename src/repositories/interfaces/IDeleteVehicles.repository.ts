interface IDeleteVehiclesRepository {
  delete(vehicleId: string): Promise<void>;
}

export { IDeleteVehiclesRepository };
