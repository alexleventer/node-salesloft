import { get } from '../utils';

class Me {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  async fetchCurrentUser() {
    return await get(this.endpoint, this.apiKey);
  }
}

export default Me;
