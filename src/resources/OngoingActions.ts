import Resource from '../Resource';

export default class OngoingActions extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async create(data: OngoingActionRequest) {
    return await super.create(data);
  }
}

export interface OngoingActionRequest {
  action_id: number;
}