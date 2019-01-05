import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Tags extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: TagsFilter = {}) {
    return await super.list(filter);
  }
}

export interface TagsFilter extends Filter {
  search?: string;
}
