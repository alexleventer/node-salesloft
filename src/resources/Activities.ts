import Resource from '../Resource';

export default class Activities extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  public async create(data: ActivityRequest) {
    return await super.create(data);
  }
}

export interface ActivityRequest {
  action_id: number;
}
