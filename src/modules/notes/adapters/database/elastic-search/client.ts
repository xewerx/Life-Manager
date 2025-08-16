import { Client } from "@elastic/elasticsearch";
import type { ElasticSearchConfig } from "./types";
import type { Database } from "../../../ports/database";
import type { Logger } from "../../../../../shared/make-module-logger";

export class ElasticSearchClient implements Database<ElasticSearchConfig> {
  private client: Client;

  constructor(private config: ElasticSearchConfig, private logger: Logger) {
    this.client = new Client({ node: this.config.url });
    this.connect();
  }

  async connect(): Promise<void> {
    try {
      await this.client.ping();
      this.logger.info("✅ Connected to ElasticSearch");
    } catch (err) {
      this.logger.error({ err }, "❌ ElasticSearch connection error");
      process.exit(1);
    }
  }

  disconnect(): Promise<void> {
    return this.client.close();
  }

  setConfig(config: ElasticSearchConfig): void {
    this.config = config;
  }

  getConfig(): ElasticSearchConfig {
    return this.config;
  }

  getClient(): Client {
    return this.client;
  }
}
