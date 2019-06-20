import bodyParser from "body-parser";
import express from "express";

export class App {
  public express: express.Application;

  private port: number;

  constructor() {
    this.port = this.normalizePort(process.env.PORT);
    this.express = express();
    this.middleware();
    this.routes();
    this.errorHandlers();
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      // tslint:disable-next-line: no-console
      console.log(`API server started on port ${this.port}`);
    });
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = express.Router();

    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });

    this.express.use("/", router);
  }

  private errorHandlers(): void {
    this.express.use(this.defaultErrorHandler);
  }

  private normalizePort(val: number|string, defaultPort: number = 3000): number {
    const portNumber: number = (typeof val === "string") ? parseInt(val, 10) : val;
    if (!isNaN(portNumber) && portNumber >= 0) {
      return portNumber;
    }
    return defaultPort;
  }

  private defaultErrorHandler(
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    res.status(500).json({errors: err});
  }
}
