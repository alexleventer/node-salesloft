import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class CallSentiments extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: Filter = {}) {
    return await super.list(filter);
  }
}
