import type { Logger } from "../../../../shared/make-module-logger";
import type { Controller as ControllerPort } from "../../ports/http/controller";
import { ErrorCodes } from "../../ports/http/error-codes";
import { ResponseCodes } from "../../ports/http/response-codes";
import type { Request, Response } from "express";

export abstract class Controller<ResBody>
  implements ControllerPort<Request, Response>
{
  constructor(protected readonly logger: Logger) {}

  public abstract handle(req: Request, res: Response): Promise<ResBody>;

  public makeHandler(): (req: Request, res: Response) => Promise<void> {
    return async (req: Request, res: Response) => {
      try {
        this.logger.info("Request received");
        const result = await this.handle(req, res);
        this.logger.info("Request handled");

        res.status(ResponseCodes.OK).json(result);
      } catch (error) {
        this.logger.error({ error }, "Error handling request");
        res
          .status(ErrorCodes.INTERNAL_SERVER_ERROR as number)
          .json({ error: "Internal server error" });
      }
    };
  }
}
