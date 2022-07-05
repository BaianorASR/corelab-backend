import { CreateController } from '@/controllers/createVehicles.controller';
import { CreateVehiclesImplementation } from '@/repositories/implementations/createVehicles.implementation';
import { CreateVehiclesUseCase } from '@/usecases/createVehicles.usecase';

const implementation = new CreateVehiclesImplementation();
const usecase = new CreateVehiclesUseCase(implementation);
const controller = new CreateController(usecase);

export { controller as createVehiclesController };
