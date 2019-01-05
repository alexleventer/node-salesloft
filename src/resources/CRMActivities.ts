import Resource from '../Resource';

export default class CRMActivities extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listCRMActivities() {
    return await super.get(this.endpoint);
  }

  async fetchCRMActivity(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
