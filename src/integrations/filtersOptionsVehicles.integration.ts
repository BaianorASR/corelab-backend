import { FiltersOptionsVehiclesController } from '@/controllers/filtersOptionsVehicles.controller';
import { FiltersOptionsVehiclesUseCase } from '@/usecases/filtersOptionsVehicles.usecase';
import { FiltersOptionsVehiclesImplementation } from '@implementations/filtersOptionsVehicles.implementation';

const implementations = new FiltersOptionsVehiclesImplementation();
const useCase = new FiltersOptionsVehiclesUseCase(implementations);
const controller = new FiltersOptionsVehiclesController(useCase);

export { controller as filtersOptionsVehiclesController };
