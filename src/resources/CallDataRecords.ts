import Resource from '../Resource';

export default class CallDataRecords extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: CallDataRecordsFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }
}

export interface CallDataRecordsFilter {
  has_call?: boolean;
  updated_at?: any;
}
