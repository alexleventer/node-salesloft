import Me from './resources/Me';
import Team from './resources/Team';
import Accounts from './resources/Accounts';
import Cadences from './resources/Cadences';
import Actions from './resources/Actions';
import ActionDetails from './resources/ActionDetails';
import People from './resources/People';

export default class SalesLoft {
  private readonly apiKey: string;
  public Me = new Me('/me.json', this.apiKey);
  public Team = new Team('/team.json', this.apiKey);
  public Accounts = new Accounts('/accounts.json', this.apiKey);
  public Cadences = new Cadences('/cadences.json', this.apiKey);
  public Actions = new Actions('/actions.json', this.apiKey);
  public ActionDetails = new ActionDetails('/action_details/call_instructions.json', this.apiKey);
  public People = new People('/people.json', this.apiKey);
  constructor(apiKey:string) {
    this.apiKey = apiKey;
  }
  getApiKey() {
    return this.apiKey;
  }
}
