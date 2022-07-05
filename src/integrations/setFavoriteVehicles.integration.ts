import { SetFavoriteVehiclesController } from '@/controllers/setFavoriteVehicles.controller';
import { SetFavoriteVehiclesImplementation } from '@/repositories/implementations/setFavoriteVehicles.implementation';
import { SetFavoriteVehiclesUseCase } from '@/usecases/setFavoriteVehicles.usecase';

const implementation = new SetFavoriteVehiclesImplementation();
const usecase = new SetFavoriteVehiclesUseCase(implementation);
const controller = new SetFavoriteVehiclesController(usecase);

export { controller as setFavoriteVehiclesController };
