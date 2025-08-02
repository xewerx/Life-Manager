import { Container } from "inversify";
import { NOTES_CONTAINER_TYPES } from "./types";
import {
  type Logger,
  makeModuleLogger,
} from "../../../../shared/make-module-logger";
import { injectControllers } from "./inject-controllers";
import { MongoDatabase } from "../../adapters/database/mongo/mongo";
import { checkForEnvironmentVariable } from "../../shared/utils/check-for-env-variable";
import { injectRepositories } from "./injectRepositories";

export const makeContainer = async () => {
  const container = new Container();

  const logger = makeModuleLogger({
    module: "notes",
  });

  const mongoDb = new MongoDatabase(
    {
      url: checkForEnvironmentVariable("MONGO_URL"),
      dbName: checkForEnvironmentVariable("MONGO_DB_NAME"),
    },
    logger
  );

  await mongoDb.connect();

  container.bind<Logger>(NOTES_CONTAINER_TYPES.Logger).toConstantValue(logger);

  injectRepositories(container);
  injectControllers(container);

  return container;
};
