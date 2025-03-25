import express from "express";
import type { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const apiPrefix = process.env.API_PREFIX || "/api/v1";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Welcome to Life Manager API",
    version: process.env.API_VERSION,
    environment: process.env.NODE_ENV,
  });
});

// API routes will be prefixed with API_PREFIX
app.get(`${apiPrefix}/health`, (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(port, () => {
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode`
  );
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log(`API is available at http://localhost:${port}${apiPrefix}`);
});
