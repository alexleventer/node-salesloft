import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class TeamTemplates extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: TeamTemplatesFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }
}

export interface TeamTemplatesFilter extends Filter{
  updated_at?: any;
  search?: string;
  tag_ids?: number[];
}
