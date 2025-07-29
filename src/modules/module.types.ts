import type { Request, Response } from "express";

export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}

export type Route = {
  path: string;
  method: Method;
  handler: (req: Request, res: Response) => void | Promise<void>;
};
