import Resource from '../Resource';
import { Filter } from '../SalesLoft';

export default class Notes extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: NotesFilter = {}) {
    return await super.list(filter);
  }

  async fetch(id: number) {
    return await super.fetch(id);
  }

  async delete(id: number) {
    return await super.delete(id);
  }

  async update(id: number, data: NoteRequest) {
    return await super.update(id, data);
  }

  async create(data: NoteRequest) {
    return await super.create(data);
  }
}

export interface NoteRequest {
  content: string;
  associated_with_type: string;
  associated_with_id: number;
  skip_crm_sync?: boolean;
  call_id?: number;
  subject?: string;
  user_guid?: string;
}

export interface NotesFilter extends Filter {
  associated_with_type?: string;
  associated_with_id?: number;
  updated_at?: any;
}
