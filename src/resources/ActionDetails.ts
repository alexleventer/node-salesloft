import Resource from '../Resource';

export default class ActionDetails extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  async listCallInstructions() {
    return await super.get(`${this.endpoint}/call_instructions`);
  }

  async fetchCallInstructions(id: string) {
    return await super.get(`${this.endpoint}/${id}`);
  }
}
