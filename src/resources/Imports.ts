import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Imports extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: ImportsFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }

  async delete(id: string) {
    return await super.delete(id);
  }

  async update(id: string, data: ImportRequest) {
    return await super.update(id, data);
  }

  async create(data: ImportRequest) {
    return await super.create(data);
  }
}

export interface ImportRequest {
  user_id: number;
  name: string;
}

export interface ImportsFilter extends Filter {
  user_ids?: number[];
}
