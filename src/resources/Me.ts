import Resource from '../Resource';

export default class Me extends Resource {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    super();
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  async fetchCurrentUser() {
    return await super.get(this.endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }
}
