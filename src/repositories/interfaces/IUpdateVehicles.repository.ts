interface IUpdateVehiclesData {
  name: string;
  description: string;
  plate: string;
  year: number;
  color: string;
  price: number;
}

interface IUpdateVehiclesRepository {
  updateVehicles: (vehicleId: string, vehicles: IUpdateVehiclesData) => Promise<void>;
}

export { IUpdateVehiclesRepository, IUpdateVehiclesData };
