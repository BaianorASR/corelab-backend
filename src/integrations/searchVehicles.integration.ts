import { SearchVehiclesController } from '@/controllers/searchVehicles.controller';
import { SearchVehiclesImplementation } from '@/repositories/implementations/searchVehicles.implementation';
import { SearchVehiclesUseCase } from '@/usecases/searchVehicles.usecase';

const implementation = new SearchVehiclesImplementation();
const usecase = new SearchVehiclesUseCase(implementation);
const controller = new SearchVehiclesController(usecase);

export { controller as searchVehiclesController };
