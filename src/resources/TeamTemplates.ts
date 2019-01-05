import Resource from '../Resource';

export default class TeamTemplates extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listTeamTemplates() {
    return await super.get(this.endpoint);
  }

  async fetchTeamTemplate(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
