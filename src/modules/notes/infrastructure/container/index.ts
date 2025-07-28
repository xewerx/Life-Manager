import { Container } from "inversify";
import { NOTES_CONTAINER_TYPES } from "./types";
import {
  type Logger,
  makeModuleLogger,
} from "../../../../shared/make-module-logger";

export const makeContainer = () => {
  const container = new Container();

  container.bind<Logger>(NOTES_CONTAINER_TYPES.Logger).toConstantValue(
    makeModuleLogger({
      module: "notes",
    })
  );

  return container;
};
