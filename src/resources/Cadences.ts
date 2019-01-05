import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Cadences extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: CadencesFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }
}

export interface CadencesFilter extends Filter {
  updated_at?: any;
  team_cadence?: boolean;
  shared?: boolean;
  owned_by_guid?: number[];
  people_addable?: boolean;
}
