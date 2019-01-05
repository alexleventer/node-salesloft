import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Successes extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: SuccessesFilter = {}) {
    return await super.list(filter);
  }
}

export interface SuccessesFilter extends Filter {
  updated_at?: any;
}
