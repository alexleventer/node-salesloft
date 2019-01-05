import Resource from '../Resource';

export default class RecordingSettings extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }
}
