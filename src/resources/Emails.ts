import Resource from '../Resource';

export default class Emails extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listEmails() {
    return await super.get(this.endpoint);
  }

  async fetchEmail(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
