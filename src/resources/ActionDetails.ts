import Resource from '../Resource';

export default class ActionDetails extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list() {
    return await super.getRequest(`${this.getEndpoint()}/call_instructions`);
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }
}
