import { Container } from "inversify";
import { NOTES_CONTAINER_TYPES } from "./types";
import {
  type Logger,
  makeModuleLogger,
} from "../../../../shared/make-module-logger";
import { injectControllers } from "./inject-controllers";
import { MongoDatabase } from "../../adapters/database/mongo/mongo";
import { checkForEnvironmentVariable } from "../../shared/utils/check-for-env-variable";
import { injectRepositories } from "./inject-repositories";
import { injectCommands } from "./inject-commands";
import type { ElasticSearchConfig } from "../../adapters/database/elastic-search/types";

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

  container
    .bind<ElasticSearchConfig>(NOTES_CONTAINER_TYPES.Config.ElasticSearch)
    .toConstantValue({
      url: checkForEnvironmentVariable("ELASTICSEARCH_URL"),
    });
  container.bind<Logger>(NOTES_CONTAINER_TYPES.Logger).toConstantValue(logger);

  injectRepositories(container);
  injectCommands(container);
  injectControllers(container);

  return container;
};
