import Resource from '../Resource';

export default class CadenceMemberships extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  async listCadenceMemberships() {
    return await super.get(this.endpoint);
  }

  async createCadenceMembership(data:CadenceMembershipRequest) {
    return await super.post(`${this.endpoint}`, data);
  }

  async deleteCadenceMembership(id: string) {
    return await super.delete(`${this.endpoint}/${id}`);
  }

  async fetchCadenceMembership(cadenceId: string) {
    return await super.get(`${this.endpoint}/${cadenceId}`);
  }
}

export interface CadenceMembershipRequest {
  person_id: number;
  cadence_id: number;
  user_id?: number;
}
