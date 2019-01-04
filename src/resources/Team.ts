import Resource from '../Resource';

export default class Team extends Resource {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    super();
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  public async fetchCurrentTeam() {
    return await super.get(this.endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }
}
