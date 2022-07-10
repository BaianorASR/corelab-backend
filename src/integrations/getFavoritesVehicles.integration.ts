import { GetFavoritesVehiclesController } from '@/controllers/getFavoritesVehicles.controller';
import { GetFavoritesVehiclesImplementation } from '@/repositories/implementations/geFavoritesVehicles.implementation';
import { GetFavoritesVehiclesUseCase } from '@/usecases/getFavoritesVehicles.usecase';

const implementation = new GetFavoritesVehiclesImplementation();
const usecase = new GetFavoritesVehiclesUseCase(implementation);
const controller = new GetFavoritesVehiclesController(usecase);

export { controller as getFavoritesVehiclesController };
