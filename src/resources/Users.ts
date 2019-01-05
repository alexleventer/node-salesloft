import Resource from '../Resource';

export default class Users extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listUsers() {
    return await super.get(this.endpoint);
  }

  public async fetchUser(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
