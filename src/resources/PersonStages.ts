import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class PersonStages extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: Filter = {}) {
    return await super.list(filter);
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }

  async delete(id: string) {
    return await super.delete(id);
  }

  async create(data:PersonStageRequest) {
    return await super.create(data);
  }

  async update(id: string, data:PersonStageRequest) {
    return await super.update(id, data);
  }
}

export interface PersonStageRequest {
  name: string;
}
