import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class CadenceMemberships extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: CadenceMembershipsFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }

  async create(data:CadenceMembershipRequest) {
    return await super.postRequest(`${this.getEndpoint()}`, data);
  }

  async delete(id: number) {
    return await super.delete(id);
  }
}

export interface CadenceMembershipRequest {
  person_id: number;
  cadence_id: number;
  user_id?: number;
}

export interface CadenceMembershipsFilter extends Filter {
  person_id?: number;
  cadence_id?: number;
  updated_at?: any;
}
