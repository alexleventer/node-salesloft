import SalesLoft from '../src/SalesLoft';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { PersonRequest} from '../src/resources/People';
import { CurrentUserResponse } from '../src/resources/Me';
import { TeamResponse } from '../src/resources/Team';
const { API_KEY }:any = process.env;

describe('SalesLoft', async () => {
  const sl =  new SalesLoft(API_KEY);
  const { Me, Team, Accounts, Cadences, ActionDetails, Actions, People, CadenceMemberships, Users } = sl;
  describe('Me', async () => {
    it('should fetch current user', async () => {
      const meResults:CurrentUserResponse = await Me.list();
      expect(meResults).to.have.property('data');
      expect(meResults.data).to.have.property('id');
      expect(meResults.data).to.have.property('guid');
      expect(meResults.data).to.have.property('first_name');
      expect(meResults.data).to.have.property('last_name');
    });
  });
  describe('Team', async () => {
    it('should fetch current team', async () => {
      const teamResults:TeamResponse = await Team.list();
      expect(teamResults).to.have.property('data');
      expect(teamResults.data).to.have.property('id');
      expect(teamResults.data).to.have.property('name');
    });
  });
  describe('Accounts', async () => {
    it('should list accounts', async () => {
      const accountResults = await Accounts.list();
      expect(accountResults).to.have.property('data');
    });
  });
  describe('Cadences', async () => {
    it('should list cadences', async () => {
      const accountResults = await Cadences.list();
      expect(accountResults).to.have.property('data');
    });
  });
  describe('Actions', async () => {
    it('should list actions', async () => {
      const accountResults = await Actions.list();
      expect(accountResults).to.have.property('data');
    });
  });
  describe('Action Details', async () => {
    it('should list action details', async () => {
      const accountResults = await ActionDetails.list();
      expect(accountResults).to.have.property('data');
    });
  });
  describe('People', async () => {
    it('should list people', async () => {
      const peopleResults = await People.list();
      expect(peopleResults).to.have.property('data');
    });
    it('should create person', async () => {
      const personRequest: PersonRequest = {
        email_address: 'alexleventer@gmail.com',
        first_name: 'Alex',
        last_name: 'Leventer',
      };
      const peopleResults = await People.create(personRequest);
      expect(peopleResults).to.have.property('data');
    })
  });
  describe('Cadence Memberships', async () => {
    it('should list cadence memberships', async () => {
      const cadenceMembershipResults = await CadenceMemberships.list();
      expect(cadenceMembershipResults).to.have.property('data');
    });
  });
  describe('Users', async () => {
    it('should list users', async () => {
      const usersResults = await Users.list();
      expect(usersResults).to.have.property('data');
    });
  });
});
