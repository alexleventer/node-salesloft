import Resource from '../Resource';

export default class Accounts extends Resource {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    super();
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  async listAccounts() {
    return await super.get(this.endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }

  createAccount(data: AccountRequest) {
    return this.post(this.endpoint, data, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }

  async fetchAccount(id: string) {
    return await super.get(`${this.endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }

  async deleteAccount(id: string) {
    return await super.delete(`${this.endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }
}

export interface AccountRequest {
  name: string;
  domain: string;
  conversational_name?: string;
  description?: string;
  phone?: string;
  website?: string;
  linkedin_url?: string;
  twitter_handle?: string;
}