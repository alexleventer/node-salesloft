import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class ActionDetails extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: Filter = {}) {
    const results = await super.getRequest(`${this.getEndpoint()}/call_instructions`, {
      params: filter,
    });
    return results.data;
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }
}
