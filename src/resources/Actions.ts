import Resource from '../Resource';

export default class Actions extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  async listActions() {
    return await super.get(this.endpoint);
  }

  async fetchAction(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
