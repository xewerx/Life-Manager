import { Container } from "inversify";
import { NOTES_CONTAINER_TYPES } from "./types";
import {
  type Logger,
  makeModuleLogger,
} from "../../../../shared/make-module-logger";
import { injectControllers } from "./inject-controllers";

export const makeContainer = () => {
  const container = new Container();

  const logger = makeModuleLogger({
    module: "notes",
  });

  container.bind<Logger>(NOTES_CONTAINER_TYPES.Logger).toConstantValue(logger);

  injectControllers(container);

  return container;
};
