import Resource from '../Resource';

export default class Imports extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list() {
    return await super.list();
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
