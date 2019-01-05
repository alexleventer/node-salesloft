import Resource from '../Resource';

export default class Users extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: UsersFilter) {
    return await super.list(filter);
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }
}

export interface UsersFilter {
  guid: number[];
}
