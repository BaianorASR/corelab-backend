import { GetAllVehiclesController } from '@/controllers/getAllVehicles.controller';
import { GetAllVehiclesImplementation } from '@implementations/getAllVehicles.implementation';
import { GetAllVehiclesUseCase } from '@/usecases/getAllVehicles.usecase';

const implementation  = new GetAllVehiclesImplementation()
const usecase = new GetAllVehiclesUseCase(implementation)
console.log(usecase)
const controller = new GetAllVehiclesController(usecase)

export { controller as getAllVehiclesController }