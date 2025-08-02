import mongoose from "mongoose";
import type { Database } from "../../../ports/database";
import type { MongoDatabaseConfig } from "./types";
import type { Logger } from "../../../../../shared/make-module-logger";

export class MongoDatabase implements Database<MongoDatabaseConfig> {
  constructor(private config: MongoDatabaseConfig, private logger: Logger) {}

  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.config.url);
      this.logger.info("✅ Connected to MongoDB");
    } catch (err) {
      this.logger.error("❌ MongoDB connection error:", err);
      process.exit(1);
    }
  }

  disconnect(): Promise<void> {
    return mongoose.disconnect();
  }

  setConfig(config: MongoDatabaseConfig): void {
    this.config = config;
  }

  getConfig(): MongoDatabaseConfig {
    return this.config;
  }
}
