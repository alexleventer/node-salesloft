import Resource from '../Resource';

export default class CustomFields extends Resource {
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

  async update(id: string, data: CustomFieldRequest) {
    return await super.update(id, data);
  }

  async create(data: CustomFieldRequest) {
    return await super.create(data);
  }
}

export interface CustomFieldRequest {
  name: string;
  field_type?: string;
}
