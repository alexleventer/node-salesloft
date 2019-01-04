import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export default class Resource {
  private readonly axios: AxiosInstance;
  private readonly apiBase: string;
  constructor() {
    this.axios = axios;
    this.apiBase = 'https://api.salesloft.com/v2';
  }
  async post(endpoint: string, data: any, config?: AxiosRequestConfig) {
    try {
      const results:AxiosResponse = await this.axios.post(`${this.apiBase}${endpoint}`, data, config);
      return results.data;
    } catch (error) {
      const statusCode = error.response.status;
      if (statusCode === 422) {
        throw new Error(`${JSON.stringify(error.response.data, null, 2)}`);
      }
      throw error;
    }
  }
  async get(endpoint: string, config?: AxiosRequestConfig) {
    try {
      const results:AxiosResponse = await this.axios.get(`${this.apiBase}${endpoint}`, config);
      return results.data;
    } catch (error) {
      throw error;
    }
  }
  async delete(endpoint: string, config?: AxiosRequestConfig) {
    try {
      const results:AxiosResponse = await this.axios.delete(`${this.apiBase}${endpoint}`, config);
      return results.data;
    } catch (error) {
      throw error;
    }
  }
}