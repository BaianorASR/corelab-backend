interface ISetFavoriteVehiclesRepository {
  setFavoriteVehicles(id: number): Promise<void>;
}

export { ISetFavoriteVehiclesRepository };
