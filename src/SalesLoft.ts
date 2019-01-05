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

export class SalesLoft {
  public Me: Me;
  public Team: Team;
  public Accounts: Accounts;
  public Actions: Actions;
  public Activities: Activities;
  public Cadences: Cadences;
  public ActionDetails: ActionDetails;
  public CadenceMemberships: CadenceMemberships;
  public CallDataRecords: CallDataRecords;
  public CallDispositions: CallDispositions;
  public Calls: Calls;
  public CallSentiments: CallSentiments;
  public CallerIDs: CallerIDs;
  public CRMActivityFields: CRMActivityFields;
  public CRMActivities: CRMActivities;
  public CustomFields: CustomFields;
  public Emails: Emails;
  public EmailTemplates: EmailTemplates;
  public Imports: Imports;
  public LiveWebsiteTrackingParameters: LiveWebsiteTrackingParameters;
  public Notes: Notes;
  public OngoingActions: OngoingActions;
  public People: People;
  public PersonStages: PersonStages;
  public RecordingSettings: RecordingSettings;
  public Steps: Steps;
  public Successes: Successes;
  public Tags: Tags;
  public TeamTemplates: TeamTemplates;
  public Users: Users;

  constructor(apiKey:string) {
    this.Me = new Me('/me', apiKey);
    this.Team = new Team('/team', apiKey);
    this.Accounts = new Accounts('/accounts', apiKey);
    this.Actions = new Actions('/actions', apiKey);
    this.ActionDetails = new ActionDetails('/action_details', apiKey);
    this.Activities = new Activities('/activities', apiKey);
    this.Cadences = new Cadences('/cadences', apiKey);
    this.CadenceMemberships = new CadenceMemberships('/cadence_memberships', apiKey);
    this.CallDataRecords = new CallDataRecords('/call_data_records', apiKey);
    this.CallDispositions = new CallDispositions('/call_dispositions', apiKey);
    this.Calls = new Calls('/activities/calls', apiKey);
    this.CallSentiments = new CallSentiments('/call_sentiments', apiKey);
    this.CallerIDs = new CallerIDs('/phone_numbers/caller_ids', apiKey);
    this.CRMActivityFields = new CRMActivityFields('/crm_activity_fields' , apiKey);
    this.CRMActivities = new CRMActivities('/crm_activities', apiKey);
    this.CustomFields = new CustomFields('/custom_fields', apiKey);
    this.Emails = new Emails('/activities/emails', apiKey);
    this.EmailTemplates = new EmailTemplates('/email_templates', apiKey);
    this.Imports = new Imports('/imports', apiKey);
    this.LiveWebsiteTrackingParameters = new LiveWebsiteTrackingParameters('/live_website_tracking_parameters' , apiKey);
    this.Notes = new Notes('/notes', apiKey);
    this.OngoingActions = new OngoingActions('/ongoing_actions', apiKey);
    this.People = new People('/people', apiKey);
    this.PersonStages = new PersonStages('/person_stages', apiKey);
    this.RecordingSettings = new RecordingSettings('/recording_settings', apiKey);
    this.Steps = new Steps('/successes', apiKey);
    this.Successes = new Successes('/steps', apiKey);
    this.Tags = new Tags('/tags', apiKey);
    this.TeamTemplates = new TeamTemplates('/team_templates', apiKey);
    this.Users = new Users('/users', apiKey);
  }
}

export interface Filter {
  ids?: number[];
  sort_by?: string;
  sort_direction?: 'ASC' | 'DESC';
  per_page?: number;
  page?: number;
  include_paging_counts?: boolean;
}

export interface GenericResourceResponse {
  _href: string;
  id: number;
}