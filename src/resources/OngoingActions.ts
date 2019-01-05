import Resource from '../Resource';

export default class OngoingActions extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }
}
