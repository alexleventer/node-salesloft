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
import Activities from './resources/Activities';
import CallDataRecords from './resources/CallDataRecords';
import CallDispositions from './resources/CallDispositions';
import Calls from './resources/Calls';
import CallSentiments from './resources/CallSentiments';
import CallerIDs from './resources/CallerIDs';
import CRMActivityFields from './resources/CRMActivityFields';
import CRMActivities from './resources/CRMActivities';
import CustomFields from './resources/CustomFields';
import Emails from './resources/Emails';
import EmailTemplates from './resources/EmailTemplates';
import Imports from './resources/Imports';
import LiveWebsiteTrackingParameters from './resources/LiveWebsiteTrackingParameters';
import Notes from './resources/Notes';
import OngoingActions from './resources/OngoingActions';
import PersonStages from './resources/PersonStages';
import RecordingSettings from './resources/RecordingSettings';

export default class SalesLoft {
  private readonly apiKey: string;
  public Me = new Me('/me', this.apiKey);
  public Team = new Team('/team', this.apiKey);
  public Accounts = new Accounts('/accounts', this.apiKey);
  public Actions = new Actions('/actions', this.apiKey);
  public ActionDetails = new ActionDetails('/action_details', this.apiKey);
  public Activities = new Activities('/activities', this.apiKey);
  public Cadences = new Cadences('/cadences', this.apiKey);
  public CadenceMemberships = new CadenceMemberships('/cadence_memberships', this.apiKey);
  public CallDataRecords = new CallDataRecords('/call_data_records', this.apiKey);
  public CallDispositions = new CallDispositions('/call_dispositions', this.apiKey);
  public Calls = new Calls('/activities/calls', this.apiKey);
  public CallSentiments = new CallSentiments('/call_sentiments', this.apiKey);
  public CallerIDs = new CallerIDs('/phone_numbers/caller_ids', this.apiKey);
  public CRMActivityFields = new CRMActivityFields('/crm_activity_fieldss' , this.apiKey);
  public CRMActivities = new CRMActivities('/crm_activities', this.apiKey);
  public CustomFields = new CustomFields('/custom_fields', this.apiKey);
  public Emails = new Emails('/activities/emails', this.apiKey);
  public EmailTemplates = new EmailTemplates('/email_templates', this.apiKey);
  public Imports = new Imports('/imports', this.apiKey);
  public LiveWebsiteTrackingParameters = new LiveWebsiteTrackingParameters('/live_website_tracking_parameters' , this.apiKey);
  public Notes = new Notes('/notes', this.apiKey);
  public OngoingActions = new OngoingActions('/ongoing_actions', this.apiKey);
  public People = new People('/people', this.apiKey);
  public PersonStages = new PersonStages('/person_stages', this.apiKey);
  public RecordingSettings = new RecordingSettings('/recording_settings', this.apiKey);
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
