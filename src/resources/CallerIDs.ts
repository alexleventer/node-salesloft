import Resource from '../Resource';

export default class CallerIDs extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listCallerIDs() {
    return await super.get(this.endpoint);
  }
}
