interface ISetFavoriteVehiclesRepository {
  setFavoriteVehicles(vehicleId: string): Promise<void>;
}

export { ISetFavoriteVehiclesRepository };
