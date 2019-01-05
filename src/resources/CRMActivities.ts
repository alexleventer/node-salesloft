import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class CRMActivities extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: CRMActivitiesFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }
}

export interface CRMActivitiesFilter extends Filter {
  updated_at?: any;
}
