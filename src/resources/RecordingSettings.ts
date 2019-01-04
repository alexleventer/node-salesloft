import Resource from '../Resource';

export default class RecordingSettings extends Resource {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    super();
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  async fetchRecordingSetting(id: string) {
    return await super.get(`${this.endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }
}
