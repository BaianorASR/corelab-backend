import { Request, Response } from 'express';

import { StatusCodes } from '@/configs/StatusCodes';
import { DeleteVehiclesUseCase } from '@/usecases/deleteVehicles.usecase';

class DeleteVehiclesController {
  constructor(private useCase: DeleteVehiclesUseCase) {}

  public async handle(request: Request, response: Response) {
    const { id } = request.params;
    await this.useCase.execute(id);
    return response
      .status(StatusCodes.NO_CONTENT)
      .json({ message: `The vehicle with id: ${id} was deleted successfully` });
  }
}

export { DeleteVehiclesController };
