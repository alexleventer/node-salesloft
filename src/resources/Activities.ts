import Resource from '../Resource';

export default class Activities extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }

  public async createActivity(data: ActivityRequest) {
    return await super.post(this.endpoint, data);
  }
}

export interface ActivityRequest {
  action_id: number;
}
