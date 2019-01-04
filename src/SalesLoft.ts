import Me from './resources/Me';
import Team from './resources/Team';
import Account from './resources/Account';
import Resource from './Resource';

export default class SalesLoft {
  private readonly apiKey: string;
  public Me: Resource;
  public Team: Resource;
  public Account: Resource;
  constructor(apiKey:string) {
    this.apiKey = apiKey;
    this.Me = new Me(`/me.json`, this.apiKey);
    this.Team = new Team(`/team.json`, this.apiKey);
    this.Account = new Account('', this.apiKey);
  }
  getApiKey() {
    return this.apiKey;
  }
}
