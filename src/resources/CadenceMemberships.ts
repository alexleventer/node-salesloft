import Resource from '../Resource';

export default class CadenceMemberships extends Resource {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    super();
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  async listCadenceMemberships() {
    return await super.get(this.endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }

  async createCadenceMembership(data:CadenceMembershipRequest) {
    return await super.post(`${this.endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }

  async deleteCadenceMembership(id: string) {
    return await super.delete(`${this.endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }

  async fetchCadenceMembership(cadenceId: string) {
    return await super.get(`${this.endpoint}/${cadenceId}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }
}

export interface CadenceMembershipRequest {
  person_id: number;
  cadence_id: number;
  user_id?: number;
}
