import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export default class Resource {
  private readonly axios: AxiosInstance;
  private readonly apiBase: string;
  private readonly apiKey: string;
  constructor(apiKey: string) {
    this.axios = axios;
    this.apiBase = 'https://api.salesloft.com/v2';
    this.apiKey = apiKey;
  }
  async post(endpoint: string, data: any, _config: AxiosRequestConfig = {}) {
    try {
      const config = Object.assign(_config, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        }
      });
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
  async put(endpoint: string, data: any, _config: AxiosRequestConfig = {}) {
    try {
      const config = Object.assign(_config, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        }
      });
      const results:AxiosResponse = await this.axios.put(`${this.apiBase}${endpoint}`, data, config);
      return results.data;
    } catch (error) {
      throw error;
    }
  }
  async get(endpoint: string, _config: AxiosRequestConfig = {}) {
    try {
      const config = Object.assign(_config, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        }
      });
      console.log(config);
      const results:AxiosResponse = await this.axios.get(`${this.apiBase}${endpoint}`, config);
      return results.data;
    } catch (error) {
      throw error;
    }
  }
  async delete(endpoint: string, _config: AxiosRequestConfig = {}) {
    try {
      const config = Object.assign(_config, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        }
      });
      const results:AxiosResponse = await this.axios.delete(`${this.apiBase}${endpoint}`, config);
      return results.data;
    } catch (error) {
      throw error;
    }
  }
}