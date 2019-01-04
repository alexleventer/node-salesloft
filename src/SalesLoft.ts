import Me from './resources/Me';
import Team from './resources/Team';
import Accounts from './resources/Accounts';
import Resource from './Resource';
import Cadences from './resources/Cadences';
import Actions from './resources/Actions';
import ActionDetails from './resources/ActionDetails';

export default class SalesLoft {
  private readonly apiKey: string;
  public Me: Resource;
  public Team: Resource;
  public Accounts: Resource;
  public Cadences: Resource;
  public Actions: Resource;
  public ActionDetails: Resource;
  constructor(apiKey:string) {
    this.apiKey = apiKey;
    this.Me = new Me(`/me.json`, this.apiKey);
    this.Team = new Team(`/team.json`, this.apiKey);
    this.Accounts = new Accounts('/accounts.json', this.apiKey);
    this.Cadences = new Cadences('/cadences.json', this.apiKey);
    this.Actions = new Actions('/actions.json', this.apiKey);
    this.ActionDetails = new ActionDetails('/action_details/call_instructions.json', this.apiKey);
  }
  getApiKey() {
    return this.apiKey;
  }
}
