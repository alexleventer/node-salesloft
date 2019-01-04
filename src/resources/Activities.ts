import Resource from '../Resource';

export default class Activities extends Resource {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    super();
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }
  public async createActivity(data: ActivityRequest) {
    return await super.post(this.endpoint, data);
  }
}

export interface ActivityRequest {
  action_id: number;
}
