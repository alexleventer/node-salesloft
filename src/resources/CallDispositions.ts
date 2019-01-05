import Resource from '../Resource';

export default class CallDispositions extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listCallDispositions() {
    return await super.get(this.endpoint);
  }
}
