import Resource from '../Resource';

export default class ActionDetails extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list() {
    const results = await super.getRequest(`${this.getEndpoint()}/call_instructions`);
    return results.data;
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }
}
