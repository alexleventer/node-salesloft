import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Calls extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: Filter = {}) {
    return await super.list(filter);
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }

  async create(data: CallRequest) {
    return await super.create(data);
  }
}

export interface CallRequest {
  person_id: number;
  to?: string;
  duration?: number;
  disposition?: string;
  sentiment?: string;
  notes?: string;
  user_guid?: string;
  action_id?: number;
  crm_params: any;
}
