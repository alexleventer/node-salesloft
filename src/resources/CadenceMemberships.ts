import Resource from '../Resource';

export default class CadenceMemberships extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list() {
    return await super.list();
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }

  async create(data:CadenceMembershipRequest) {
    return await super.postRequest(`${this.getEndpoint()}`, data);
  }

  async delete(id: string) {
    return await super.delete(id);
  }
}

export interface CadenceMembershipRequest {
  person_id: number;
  cadence_id: number;
  user_id?: number;
}
