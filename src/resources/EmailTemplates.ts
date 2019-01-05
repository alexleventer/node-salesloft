import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class EmailTemplates extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: EmailTemplatesFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }
}

export interface EmailTemplatesFilter extends Filter {
  updated_at?: any;
  linked_to_team_template?: boolean;
  search?: string;
  tag_ids?: number[];
}
