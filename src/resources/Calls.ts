import Resource from '../Resource';

export default class Successes extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listCalls() {
    return await super.get(this.endpoint);
  }

  async fetchCall(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
