import { Request, Response, Router } from 'express';

import { createVehiclesController } from '@/integrations/createVehicles.integration';
import { deleteVehiclesController } from '@/integrations/deleteVehicles.integration';
import { getAllVehiclesController } from '@/integrations/getAllVehicles.integration';
import { updateVehiclesController } from '@/integrations/updateVehicles.integration';
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
    this.router.get(`${this.path}`, async (req: Request, res: Response) => {
      await getAllVehiclesController.handle(req, res);
    });
    this.router.post(`${this.path}`, async (req: Request, res: Response) => {
      await createVehiclesController.handle(req, res);
    });
    this.router.put(`${this.path}/:id`, async (req: Request, res: Response) => {
      await updateVehiclesController.handle(req, res);
    });
    this.router.delete(`${this.path}/:id`, async (req: Request, res: Response) => {
      await deleteVehiclesController.handle(req, res);
    });
  }
}

export default Vehicles.getInstance();
