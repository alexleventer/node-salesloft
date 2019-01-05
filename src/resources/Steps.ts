import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Steps extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: StepsFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }
}

export interface StepsFilter extends Filter {
  cadence_id?: number;
  type?: string;
  has_due_actions?: boolean;
}
