import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class CustomFields extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: CustomFieldsFilter = {}) {
    return await super.list(filter);
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

export interface CustomFieldsFilter extends Filter {
  field_type?: string;
}
