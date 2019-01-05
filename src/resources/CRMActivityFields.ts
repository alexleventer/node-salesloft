import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class CRMActivityFields extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: CRMActivityFieldsFilter = {}) {
    return await super.list(filter);
  }
}

export interface CRMActivityFieldsFilter extends Filter {
  source?: string;
}
