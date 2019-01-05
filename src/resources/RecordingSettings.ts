import Resource from '../Resource';

export default class RecordingSettings extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  async fetchRecordingSetting(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
