import Resource from '../Resource';

export default class People extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listPeople() {
    return await super.get(this.endpoint);
  }

  public async createPerson(data: PersonRequest) {
    return await super.post(this.endpoint, data);
  }

  async fetchPerson(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }

  async deletePerson(id: string) {
    return await super.delete(`${this.endpoint}/${id}`);
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