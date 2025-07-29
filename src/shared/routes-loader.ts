import type { Module } from "../modules/module";
import type { Express } from "express";

export const loadRoutes = (
  app: Express,
  apiPrefix: string,
  modules: Module[]
) => {
  for (const module of modules) {
    for (const route of module.getRoutes()) {
      app[route.method](
        `${apiPrefix}/${module.prefix}/${route.path}`,
        route.handler
      );
    }
  }
};
