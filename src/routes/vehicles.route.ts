import { Request, Response, Router } from 'express';

import { changeStatusVehiclesController } from '@/integrations/changeStatusFavoriteVehicles.integration';
import { createVehiclesController } from '@/integrations/createVehicles.integration';
import { deleteVehiclesController } from '@/integrations/deleteVehicles.integration';
import { filtersOptionsVehiclesController } from '@/integrations/filtersOptionsVehicles.integration';
import { getAllVehiclesController } from '@/integrations/getAllVehicles.integration';
import { getFavoritesVehiclesController } from '@/integrations/getFavoritesVehicles.integration';
import { updateVehiclesController } from '@/integrations/updateVehicles.integration';
import { validateVehicleData } from '@/middlewares/validateVehicleData.middleware';
import { verifyIfVehicleExist } from '@/middlewares/verifyIfVehicleExist.middleware';
import { IRoutes } from '@interfaces/routes.interface';

class Vehicles implements IRoutes {
  private static instance: Vehicles;
  public readonly path = '/vehicles';
  public readonly router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public static getInstance(): Vehicles {
    if (!Vehicles.instance) {
      Vehicles.instance = new Vehicles();
    }

    return Vehicles.instance;
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, async (request: Request, response: Response) => {
      await getAllVehiclesController.handle(request, response);
    });

    this.router.post(
      `${this.path}`,
      validateVehicleData,
      // verifyIfVehicleExist,
      async (request: Request, response: Response) => {
        await createVehiclesController.handle(request, response);
      },
    );

    this.router.get(
      `${this.path}/favorite`,
      async (request: Request, response: Response) => {
        console.log('oi');
        await getFavoritesVehiclesController.handle(request, response);
      },
    );

    this.router.put(
      `${this.path}/favorite/:id`,
      verifyIfVehicleExist,
      async (request: Request, response: Response) => {
        await changeStatusVehiclesController.handle(request, response);
      },
    );

    this.router.put(
      `${this.path}/:id`,
      validateVehicleData,
      verifyIfVehicleExist,
      async (request: Request, response: Response) => {
        await updateVehiclesController.handle(request, response);
      },
    );

    this.router.delete(
      `${this.path}/:id`,
      verifyIfVehicleExist,
      async (request: Request, response: Response) => {
        await deleteVehiclesController.handle(request, response);
      },
    );

    this.router.get(
      `${this.path}/filters`,
      async (request: Request, response: Response) => {
        await filtersOptionsVehiclesController.handle(request, response);
      },
    );
  }
}

export default Vehicles.getInstance();
