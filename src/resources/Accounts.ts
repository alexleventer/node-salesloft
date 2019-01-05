import Resource from '../Resource';

export default class Accounts extends Resource {
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

  async create(data: AccountRequest) {
    return await super.create(data);
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