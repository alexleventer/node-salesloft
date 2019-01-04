import Resource from '../Resource';

export default class Account extends Resource {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    super();
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  async fetchCurrentUser() {
    return await super.get(this.endpoint, this.apiKey);
  }
}
