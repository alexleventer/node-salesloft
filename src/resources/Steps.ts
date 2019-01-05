import Resource from '../Resource';

export default class Steps extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listSteps() {
    return await super.get(this.endpoint);
  }

  async fetchStep(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
