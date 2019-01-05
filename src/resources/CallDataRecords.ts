import Resource from '../Resource';

export default class CallDataRecords extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listCallDataRecords() {
    return await super.get(this.endpoint);
  }

  public async fetchCallDataRecord(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
