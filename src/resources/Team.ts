import { get } from '../utils';

class Team {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  async fetchCurrentTeam() {
    return await get(this.endpoint, this.apiKey);
  }
}

export default Team;
