import { GetAllVehiclesController } from '@/controllers/getAllVehicles.controller';
import { GetAllVehiclesUseCase } from '@/usecases/getAllVehicles.usecase';
import { GetAllVehiclesImplementation } from '@implementations/getAllVehicles.implementation';

const implementation = new GetAllVehiclesImplementation();
const usecase = new GetAllVehiclesUseCase(implementation);
const controller = new GetAllVehiclesController(usecase);

export { controller as getAllVehiclesController };
