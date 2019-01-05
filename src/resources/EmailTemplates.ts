import Resource from '../Resource';

export default class EmailTemplates extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listEmailTemplates() {
    return await super.get(this.endpoint);
  }

  async fetchEmailTemplate(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
