import Resource from '../Resource';

export default class Notes extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async listNotes() {
    return await super.get(this.endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }

  async fetchNote(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }

  async deleteNote(id: string) {
    return await super.delete(`${this.endpoint}/${id}`);
  }
}
