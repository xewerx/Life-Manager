import express from "express";
import type { Express, Request, Response } from "express";
import dotenv from "dotenv";
import notesModule from "./modules/notes";
import { loadRoutes } from "./shared/routes-loader";

// Load environment variables
dotenv.config();

const startApp = async () => {
  const app: Express = express();
  const port = process.env.PORT || 3000;
  const apiPrefix = process.env.API_PREFIX || "/api/v1";

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes will be prefixed with API_PREFIX
  app.get(`${apiPrefix}/health`, (_req: Request, res: Response) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
    });
  });

  await notesModule.init();

  // Load routes
  loadRoutes(app, apiPrefix, [notesModule]);

  app.listen(port, () => {
    // biome-ignore lint/suspicious/noConsoleLog: TODO: logger
    console.log(
      `Server is running on port ${port} in ${process.env.NODE_ENV} mode. API is available at http://localhost:${port}${apiPrefix}.`
    );
  });
};

startApp();
