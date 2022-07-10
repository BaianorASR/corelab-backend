import { ChangeStatusVehiclesController } from '@/controllers/changeStatusFavoriteVehicles.controller';
import { ChangeStatusVehiclesImplementation } from '@/repositories/implementations/changeStatusFavoriteVehicles.implementation';
import { ChangeStatusVehiclesUseCase } from '@/usecases/changeStatusFavoriteVehicles.usecase';

const implementation = new ChangeStatusVehiclesImplementation();
const usecase = new ChangeStatusVehiclesUseCase(implementation);
const controller = new ChangeStatusVehiclesController(usecase);

export { controller as changeStatusVehiclesController };
