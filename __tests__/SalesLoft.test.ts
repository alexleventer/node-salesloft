import SalesLoft from '../src/SalesLoft';
import { describe, it } from 'mocha';
import { expect } from 'chai';
const { API_KEY }:any = process.env;

describe('SalesLoft', async () => {
  const sl =  new SalesLoft(API_KEY);
  const { Me, Team, Accounts, Cadences, ActionDetails, Actions } = sl;
  describe('Me', async () => {
    it('should fetch current user', async () => {
      const meResults = await Me.fetchCurrentUser();
      expect(meResults).to.have.property('data');
      expect(meResults.data).to.have.property('id');
      expect(meResults.data).to.have.property('guid');
      expect(meResults.data).to.have.property('first_name');
      expect(meResults.data).to.have.property('last_name');
    });
  });
  describe('Team', async () => {
    it('should fetch current team', async () => {
      const teamResults = await Team.fetchCurrentTeam();
      expect(teamResults).to.have.property('data');
      expect(teamResults.data).to.have.property('id');
      expect(teamResults.data).to.have.property('name');
    });
  });
  describe('Accounts', async () => {
    it('should list accounts', async () => {
      const accountResults = await Accounts.listAccounts();
      expect(accountResults).to.have.property('data');
    });
  });
  describe('Cadences', async () => {
    it('should list cadences', async () => {
      const accountResults = await Cadences.listCadences();
      expect(accountResults).to.have.property('data');
    });
  });
  describe('Actions', async () => {
    it('should list actions', async () => {
      const accountResults = await Actions.listActions();
      expect(accountResults).to.have.property('data');
    });
  });
  describe('Action Details', async () => {
    it('should list action details', async () => {
      const accountResults = await ActionDetails.listCallInstructions();
      expect(accountResults).to.have.property('data');
    });
  });
});
