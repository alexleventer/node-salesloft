import Resource from '../Resource';

export default class Imports extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listImports() {
    return await super.get(this.endpoint);
  }

  async fetchImport(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }

  async deleteImport(id: string) {
    return await super.delete(`${this.endpoint}/${id}`);
  }
}
