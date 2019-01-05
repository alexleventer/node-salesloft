import Resource from '../Resource';

export default class CustomFields extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listCustomFields() {
    return await super.get(this.endpoint);
  }

  async fetchCustomField(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }

  async deleteCustomField(id: string) {
    return await super.delete(`${this.endpoint}/${id}`);
  }
}
