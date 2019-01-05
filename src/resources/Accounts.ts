import Resource from '../Resource';

export default class Accounts extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  async listAccounts() {
    return await super.get(this.endpoint);
  }

  createAccount(data: AccountRequest) {
    return this.post(this.endpoint, data);
  }

  async fetchAccount(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }

  async deleteAccount(id: string) {
    return await super.delete(`${this.endpoint}/${id}`);
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