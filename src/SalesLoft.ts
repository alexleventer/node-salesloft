import Me from './resources/Me';
import Team from './resources/Team';
import Accounts from './resources/Accounts';
import Resource from './Resource';

export default class SalesLoft {
  private readonly apiKey: string;
  public Me: Resource;
  public Team: Resource;
  public Accounts: Resource;
  constructor(apiKey:string) {
    this.apiKey = apiKey;
    this.Me = new Me(`/me.json`, this.apiKey);
    this.Team = new Team(`/team.json`, this.apiKey);
    this.Accounts = new Accounts('/accounts.json', this.apiKey);
  }
  getApiKey() {
    return this.apiKey;
  }
}
