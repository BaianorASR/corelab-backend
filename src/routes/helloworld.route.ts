import { IRoutes } from '@interfaces/routes.interface';
import { Request, Response, Router } from 'express';

class HelloWorld implements IRoutes {
  private static instance: HelloWorld;
  public readonly path = '/';
  public readonly router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public static getInstance(): HelloWorld {
    if (!HelloWorld.instance) {
      HelloWorld.instance = new HelloWorld();
    }

    return HelloWorld.instance;
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, (req: Request, res: Response) => {
      res.json('Hello World!');
    });
  }
}

export default HelloWorld.getInstance();
