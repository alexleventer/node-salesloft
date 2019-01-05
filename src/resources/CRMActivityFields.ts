import Resource from '../Resource';

export default class CRMActivityFields extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list() {
    return await super.list();
  }
}
