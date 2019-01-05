import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Accounts extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: AccountFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }

  async delete(id: string) {
    return await super.delete(id);
  }

  async create(data: AccountRequest) {
    return await super.create(data);
  }

  async update(id: string, data: AccountRequest) {
    return await super.update(id, data);
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
  street?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  locale?: string;
  industry?: string;
  company_type?: string;
  founded?: string;
  revenue_range?: string;
  size?: string;
  do_not_contact?: boolean;
  custom_fields?: string[];
  tags?: string[];
  owner_id?: number;
  company_stage_id?: number;
}

export interface AccountFilter extends Filter {
  updated_at?: any;
  domain?: string;
}
