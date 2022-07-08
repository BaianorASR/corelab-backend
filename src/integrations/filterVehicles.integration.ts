import { FilterVehiclesController } from '@/controllers/filterVehicles.controller';
import { FilterVehiclesImplementation } from '@/repositories/implementations/filterVehicles.implementation';
import { FilterVehiclesUsecase } from '@/usecases/filterVehicles.usecase';

const implementation = new FilterVehiclesImplementation();
const usecase = new FilterVehiclesUsecase(implementation);
const controller = new FilterVehiclesController(usecase);

export { controller as filterVehiclesController };
