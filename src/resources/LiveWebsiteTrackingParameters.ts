import Resource from '../Resource';

export default class LiveWebsiteTrackingParameters extends Resource {
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    super(apiKey);
    this.endpoint = endpoint;
  }
}
