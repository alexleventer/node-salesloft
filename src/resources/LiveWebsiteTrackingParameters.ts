import Resource from '../Resource';

export default class LiveWebsiteTrackingParameters extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async create(data: LiveWebsiteTrackingParameterRequest) {
    return await super.create(data);
  }
}

export interface LiveWebsiteTrackingParameterRequest {
  person_id: number;
}
