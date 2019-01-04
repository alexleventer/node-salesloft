import Me from './resources/Me';
import Team from './resources/Team';
import Accounts from './resources/Accounts';
import Cadences from './resources/Cadences';
import CadenceMemberships from './resources/CadenceMemberships';
import Actions from './resources/Actions';
import ActionDetails from './resources/ActionDetails';
import People from './resources/People';
import Users from './resources/Users';
import Tags from './resources/Tags';
import TeamTemplates from './resources/TeamTemplates';
import Successes from './resources/Successes';
import Steps from './resources/Steps';

export default class SalesLoft {
  private readonly apiKey: string;
  public Me = new Me('/me', this.apiKey);
  public Team = new Team('/team', this.apiKey);
  public Accounts = new Accounts('/accounts', this.apiKey);
  public Cadences = new Cadences('/cadences', this.apiKey);
  public CadenceMemberships = new CadenceMemberships('/cadence_memberships', this.apiKey);
  public Actions = new Actions('/actions', this.apiKey);
  public ActionDetails = new ActionDetails('/action_details', this.apiKey);
  public People = new People('/people', this.apiKey);
  public Steps = new Steps('/successes', this.apiKey);
  public Successes = new Successes('/steps', this.apiKey);
  public Tags = new Tags('/tags', this.apiKey);
  public TeamTemplates = new TeamTemplates('/team_templates', this.apiKey);
  public Users = new Users('/users', this.apiKey);
  constructor(apiKey:string) {
    this.apiKey = apiKey;
  }
  getApiKey() {
    return this.apiKey;
  }
}
