import { get } from './utils';
import Me from './resources/Me';
import Team from './resources/Team';

class SalesLoft {
  private readonly apiKey:string;
  private readonly apiBase:string;
  public resources:any;
  constructor(apiKey:string) {
    this.apiBase = 'https://api.salesloft.com/v2';
    this.apiKey = apiKey;
    this.resources = {
      me: new Me(`${this.apiBase}/me.json`, this.apiKey),
      team: new Team(`${this.apiBase}/team.json`, this.apiKey),
    };
  }
  getApiKey() {
    return this.apiKey;
  }
}

export default SalesLoft;
