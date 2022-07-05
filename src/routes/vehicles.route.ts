import { getAllVehiclesController } from '@/integrations/getAllVehicles.integration';
import { updateVehiclesController } from '@/integrations/updateVehicles.integrantion';
import { IRoutes } from '@interfaces/routes.interface';
import { Request, Response, Router } from 'express';

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
    this.router.get(`${this.path}`, async (req: Request, res: Response) => {
      await updateVehiclesController.handle(req, res);
    });
  }
}

export default Vehicles.getInstance();
