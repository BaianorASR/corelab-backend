import { DeleteVehiclesController } from '@/controllers/deleteVehicles.controller';
import { DeleteVehiclesImplementation } from '@/repositories/implementations/deleteVehicle.implementation';
import { DeleteVehiclesUseCase } from '@/usecases/deleteVehicles.usecase';

const implementation = new DeleteVehiclesImplementation();
const usecase = new DeleteVehiclesUseCase(implementation);
const controller = new DeleteVehiclesController(usecase);

export { controller as deleteVehiclesController };
