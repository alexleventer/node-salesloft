import Resource from '../Resource';

export default class CallerIDs extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: CallerIDsFilter) {
    return await super.list(filter);
  }
}

export interface CallerIDsFilter {
  phone_number: string;
}
