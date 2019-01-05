import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Actions extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: ActionsFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }
}

export interface ActionsFilter extends Filter {
  step_id?: number;
}
