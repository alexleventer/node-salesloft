import Resource from '../Resource';

export default class Cadences extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  async listCadences() {
    return await super.get(this.endpoint);
  }

  async fetchCadence(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
