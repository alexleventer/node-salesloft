import Resource from '../Resource';

export default class Notes extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list() {
    return await super.list();
  }

  async fetch(id: string) {
    return await super.fetch(id);
  }

  async delete(id: string) {
    return await super.delete(id);
  }

  async update(id: string, data: NoteRequest) {
    return await super.update(id, data);
  }

  async create(data: NoteRequest) {
    return await super.create(data);
  }
}

export interface NoteRequest {
  content: string;
  associated_with_type: string;
  associated_with_id: string;
  skip_crm_sync?: boolean;
  call_id?: number;
  subject?: string;
  user_guid?: string;
}
