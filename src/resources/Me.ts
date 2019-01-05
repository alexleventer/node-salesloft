import Resource from '../Resource';

export default class Me extends Resource {
  private readonly endpoint:string;
  private readonly apiKey:string;
  constructor(endpoint:string, apiKey:string) {
    super();
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  async fetchCurrentUser(): Promise<CurrentUserResponse> {
    return await super.get(this.endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    });
  }
}

export interface CurrentUserResponse {
  data: {
    id: number;
    guid: string;
    created_at: string;
    updated_at: string;
    name: string;
    first_name: string;
    last_name: string;
    active: boolean;
    time_zone: string;
    slack_username: string;
    twitter_handle: string;
    email: string;
    email_client_email_address: string;
    sending_email_address: string;
    from_address: string;
    full_email_address: string;
    bcc_email_address: string;
    email_signature: string;
    email_signature_type: string;
    email_signature_click_tracking_disabled: boolean;
    team_admin: boolean;
    local_dial_enabled: boolean;
    click_to_call_enabled: boolean;
    email_client_configured: boolean;
    crm_connected: boolean;
    phone_client: {
      id: number;
    },
    phone_number_assignment: {
      id: number;
    },
    group: {
      id: number;
    },
    team: {
      id: number;
      _href: string;
    }
  }
}