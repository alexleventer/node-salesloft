import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class People extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: PeopleFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }

  public async create(data: PersonRequest) {
    return await super.create(data);
  }

  async delete(id: string) {
    return await super.delete(id);
  }

  public async update(id: string, data: PersonRequest) {
    return await super.update(id, data);
  }
}

export interface PersonRequest {
  email_address: string;
  secondary_email_address?: string;
  personal_email_address?: string;
  first_name: string;
  last_name: string;
  phone?: string;
  phone_extension?: string;
  mobile_phone?: string;
  home_phone?: string;
  linkedin_url?: string;
  title?: string;
  city?: string;
  state?: string;
  country?: string;
  work_city?: string;
  work_state?: string;
  work_country?: string;
  person_company_name?: string;
  person_company_website?: string;
  person_company_industry?: string;
  do_not_contact?: boolean;
  locale?: string;
  personal_website?: string;
  twitter_handle?: string;
  tags?: string[];
  contact_restrictions?: string[];
  custom_fields?: any[];
  account_id?: number;
  owner_id?: number;
  import_id?: number;
  person_stage_id?: number;
  autotag_date?: boolean;
}

export interface PeopleFilter extends Filter {
  updated_at?: any;
  email_addresses?: string[];
  owned_by_guid?: number[];
  person_stage_id?: number;
  do_not_contact?: boolean;
  can_email?: boolean;
}
