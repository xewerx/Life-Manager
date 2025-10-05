import type { SearchRepository } from "../../../domain/repositories/search-repository";
import type { Client } from "@elastic/elasticsearch";
import type { Logger } from "../../../../../shared/make-module-logger";
import { ElasticSearchClient } from "./client";
import type { ElasticSearchConfig } from "./types";
import type { Entity } from "../../../domain/entities/entity";

export class ElasticSearchRepository<T extends Entity<unknown>>
  implements SearchRepository<T>
{
  private client: Client;

  constructor(config: ElasticSearchConfig, logger: Logger) {
    this.client = new ElasticSearchClient(config, logger).getClient();
  }

  async findById(index: string, id: string): Promise<T | null> {
    const result = await this.client.get<T>({ index, id });

    if (!result || !result.found) {
      return null;
    }

    return result.fields as T;
  }

  async index(index: string, id: string, document: T): Promise<void> {
    await this.client.index({ index, id, document });
  }

  async delete(index: string, id: string): Promise<void> {
    await this.client.delete({ index, id });
  }

  // biome-ignore lint/suspicious/noExplicitAny: TODO: better type for query
  async search(index: string, query: any): Promise<T[]> {
    const result = await this.client.search<T>({ index, body: query });
    return result.hits.hits.map((hit) => hit.fields as T);
  }
}
