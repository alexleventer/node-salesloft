import axios, { AxiosInstance, AxiosResponse } from 'axios';

export default class Resource {
  private readonly axios: AxiosInstance;
  private readonly apiBase: string;
  constructor() {
    this.axios = axios;
    this.apiBase = 'https://api.salesloft.com/v2';
  }
  async post(endpoint: string, body: any) {
    try {
      const results:AxiosResponse = await this.axios.post(`${this.apiBase}${endpoint}`, body);
      return results.data;
    } catch (error) {
      throw error;
    }
  }
  async get(endpoint: string, body: any) {
    try {
      const results:AxiosResponse =  await this.axios.get(`${this.apiBase}${endpoint}`, body);
      return results.data;
    } catch (error) {
      throw error;
    }
  }
}