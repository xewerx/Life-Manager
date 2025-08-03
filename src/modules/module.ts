import type { Container } from "inversify";
import type { Route } from "./module.types";

export abstract class Module {
  constructor(public name: string, public prefix: string) {}

  protected routes: Route[] = [];

  public getRoutes() {
    return this.routes;
  }

  public setRoutes(routes: Route[]) {
    this.routes = routes;
  }
}
