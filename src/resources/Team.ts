import Resource from '../Resource';

export default class Team extends Resource {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    super();
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  public async fetchCurrentTeam(): Promise<TeamResponse> {
    return await super.get(this.endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }
}

export interface TeamResponse {
  data: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    group_privacy_setting: string;
    team_visibility_default: string;
    plan: string;
    license_limit: number;
    local_dial_enabled: boolean;
    record_by_default: boolean;
    call_recording_disabled: boolean;
    email_daily_limit: number;
    click_tracking_default: boolean;
    allow_automated_email_steps: boolean;
    custom_tracking_domain: string;
    dispositions_required: boolean;
    sentiments_required: boolean;
  }
}
