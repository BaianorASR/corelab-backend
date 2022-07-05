import { UpdateVehiclesController } from '@/controllers/updateVehicles.controller';
import { UpdateVehiclesImplementation } from '@/repositories/implementations/updateVehicles.implentation';
import { UpdateVehiclesUseCase } from '@/usecases/updateVehicles.usecase';

const implementation = new UpdateVehiclesImplementation();
const usecase = new UpdateVehiclesUseCase(implementation);
const controller = new UpdateVehiclesController(usecase);

export { controller as updateVehiclesController };
