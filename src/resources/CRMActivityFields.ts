import Resource from '../Resource';

export default class CRMActivityFields extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listCRMActivityFields() {
    return await super.get(this.endpoint);
  }
}
