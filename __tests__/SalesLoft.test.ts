import SalesLoft from '../src/SalesLoft';
import { describe, it } from 'mocha';
import { expect } from 'chai';
const { API_KEY }:any = process.env;

describe('SalesLoft', async () => {
  const sl =  new SalesLoft(API_KEY);
  const { me, team } = sl.resources;
  it('should fetch current user', async () => {
    const meResults = await me.fetchCurrentUser();
    expect(meResults).to.have.property('data');
    expect(meResults.data).to.have.property('id');
    expect(meResults.data).to.have.property('guid');
    expect(meResults.data).to.have.property('first_name');
    expect(meResults.data).to.have.property('last_name');
  });
  it.only('should fetch current team', async () => {
    const teamResults = await team.fetchCurrentTeam();
    expect(teamResults).to.have.property('data');
    expect(teamResults.data).to.have.property('id');
    expect(teamResults.data).to.have.property('name');
  });
});
