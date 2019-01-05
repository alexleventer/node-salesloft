import Resource from '../Resource';

export default class Tags extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listTeamTags() {
    return await super.get(this.endpoint);
  }
}
