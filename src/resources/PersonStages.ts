import Resource from '../Resource';

export default class PersonStages extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listPersonStages() {
    return await super.get(this.endpoint);
  }

  async fetchPersonStage(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }

  async deletePersonStage(id: string) {
    return await super.delete(`${this.endpoint}/${id}`);
  }
}
