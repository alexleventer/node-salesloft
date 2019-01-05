import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Emails extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: EmailsFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }
}

export interface EmailsFilter extends Filter {
  updated_at?: any;
  bounced?: boolean;
}
