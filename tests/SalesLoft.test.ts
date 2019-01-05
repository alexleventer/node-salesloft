import { SalesLoft } from '../src/SalesLoft';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { PersonRequest } from '../src/resources/People';
import { CurrentUserResponse } from '../src/resources/Me';
import { TeamResponse } from '../src/resources/Team';
import {UserResponse, UsersFilter} from '../src/resources/Users';
import { CallerIDsFilter } from '../src/resources/CallerIDs';
const { API_KEY }:any = process.env;

describe('SalesLoft', async () => {
  const sl =  new SalesLoft(API_KEY);
  const {
    Accounts,
    ActionDetails,
    Actions,
    Activities,
    CadenceMemberships,
    Cadences,
    CallDataRecords,
    CallDispositions,
    CallerIDs,
    Calls,
    CallSentiments,
    CRMActivities,
    CRMActivityFields,
    CustomFields,
    Emails,
    EmailTemplates,
    Imports,
    LiveWebsiteTrackingParameters,
    Me,
    Notes,
    OngoingActions,
    People,
    PersonStages,
    RecordingSettings,
    Steps,
    Successes,
    Tags,
    Team,
    TeamTemplates,
    Users,
  } = sl;
  describe('Me', async () => {
    it('should fetch current user', async () => {
      const meResults:CurrentUserResponse = await Me.list();
      expect(meResults).to.have.property('id');
      expect(meResults).to.have.property('guid');
      expect(meResults).to.have.property('first_name');
      expect(meResults).to.have.property('last_name');
    });
  });
  describe('Team', async () => {
    it('should fetch current team', async () => {
      const teamResults:TeamResponse = await Team.list();
      expect(teamResults).to.have.property('id');
      expect(teamResults).to.have.property('name');
    });
  });
  describe('Call Dispositions', async () => {
    it('should list call dispositions', async () => {
      const callDispositionResults:TeamResponse = await CallDispositions.list();
      expect(callDispositionResults).to.be.an('array');
    });
  });
  describe('CallerIDs', async () => {
    it('should list caller ids', async () => {
      const filter:CallerIDsFilter = {
        phone_number: '1231231234',
      };
      const callerIdResults = await CallerIDs.list(filter);
      expect(callerIdResults).to.be.an('array');
    });
  });
  describe('Calls', async () => {
    it('should list calls', async () => {
      const callResults = await Calls.list();
      expect(callResults).to.be.an('array');
    });
  });
  describe('Call Sentiments', async () => {
    it('should list call sentiments', async () => {
      const callSentimentResults = await CallSentiments.list();
      expect(callSentimentResults).to.be.an('array');
    });
  });
  describe('CRM Activities', async () => {
    it('should list crm activities', async () => {
      const crmActivityResults = await CRMActivities.list();
      expect(crmActivityResults).to.be.an('array');
    });
  });
  describe('CRM Activity Fields', async () => {
    it('should list crm activities fields', async () => {
      const crmActivityFieldResults = await CRMActivityFields.list();
      expect(crmActivityFieldResults).to.be.an('array');
    });
  });
  describe('Custom Fields', async () => {
    it('should list custom fields', async () => {
      const customFieldResults = await CustomFields.list();
      expect(customFieldResults).to.be.an('array');
    });
  });
  describe('Emails', async () => {
    it('should list emails', async () => {
      const emailResults = await Emails.list();
      expect(emailResults).to.be.an('array');
    });
  });
  describe('Email Templates', async () => {
    it('should list email templates', async () => {
      const emailTemplateResults = await EmailTemplates.list();
      expect(emailTemplateResults).to.be.an('array');
    });
  });
  describe('Imports', async () => {
    it('should list imports', async () => {
      const importResults = await Imports.list();
      expect(importResults).to.be.an('array');
    });
  });
  describe('Accounts', async () => {
    it('should list accounts', async () => {
      const accountResults = await Accounts.list();
      expect(accountResults).to.be.an('array');
    });
  });
  describe('Cadences', async () => {
    it('should list cadences', async () => {
      const accountResults = await Cadences.list();
      expect(accountResults).to.be.an('array');
    });
  });
  describe('Actions', async () => {
    it('should list actions', async () => {
      const accountResults = await Actions.list();
      expect(accountResults).to.be.an('array');
    });
  });
  describe('Action Details', async () => {
    it('should list action details', async () => {
      const accountResults = await ActionDetails.list();
      expect(accountResults).to.be.an('array');
    });
  });
  describe('People', async () => {
    it('should list people', async () => {
      const peopleResults = await People.list();
      expect(peopleResults).to.be.an('array');
    });
    it('should create person', async () => {
      const personRequest: PersonRequest = {
        email_address: 'alexleventer@gmail.com',
        first_name: 'Alex',
        last_name: 'Leventer',
      };
      const peopleResults = await People.create(personRequest);
      expect(peopleResults).to.have.property('id');
    });
  });
  describe('Cadence Memberships', async () => {
    it('should list cadence memberships', async () => {
      const cadenceMembershipResults = await CadenceMemberships.list();
      expect(cadenceMembershipResults).to.be.an('array');
    });
  });
  describe('Users', async () => {
    it('should list users', async () => {
      const filter:UsersFilter = {
        guid: [],
      };
      const usersResults:UserResponse[] = await Users.list(filter);
      expect(usersResults).to.be.an('array');
    });
    it('should fetch user', async () => {
      const filter:UsersFilter = {
        guid: [],
      };
      const usersResults:UserResponse[] = await Users.list(filter);
      const { id, guid } = usersResults[0];
      const fetchUserResults:UserResponse = await Users.fetch(id);
      expect(fetchUserResults.guid).to.equal(guid);
    });
  });
  describe('Notes', async () => {
    it('should list notes', async () => {
      const notesResults = await Notes.list();
      expect(notesResults).to.be.an('array');
    });
  });
  describe('PersonStages', async () => {
    it('should list person stages', async () => {
      const personStagesResults = await PersonStages.list();
      expect(personStagesResults).to.be.an('array');
    });
  });
  describe('Steps', async () => {
    it('should list steps', async () => {
      const stepsResults = await Steps.list();
      expect(stepsResults).to.be.an('array');
    });
  });
  describe('Successes', async () => {
    it('should list successes', async () => {
      const successesResults = await Successes.list();
      expect(successesResults).to.be.an('array');
    });
  });
  describe('Tags', async () => {
    it('should list tags', async () => {
      const tagsResults = await Tags.list();
      expect(tagsResults).to.be.an('array');
    });
  });
  describe('Team Templates', async () => {
    it('should list team templates', async () => {
      const teamTemplatesResults = await TeamTemplates.list();
      expect(teamTemplatesResults).to.be.an('array');
    });
  });
  describe('Call Data Records', async () => {
    it('should call data records', async () => {
      const callDataRecordsResults = await CallDataRecords.list();
      expect(callDataRecordsResults).to.be.an('array');
    });
  });
});
