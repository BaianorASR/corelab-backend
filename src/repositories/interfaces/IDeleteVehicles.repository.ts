interface IDeleteVehiclesRepository {
  delete(id: number): Promise<void>;
}

export { IDeleteVehiclesRepository };
