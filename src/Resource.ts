import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class Resource {
  private readonly axios: AxiosInstance;
  private readonly apiBase: string;
  private readonly apiKey: string;
  private readonly endpoint: string;
  constructor(endpoint: string, apiKey: string) {
    this.axios = axios;
    this.apiBase = 'https://api.salesloft.com/v2';
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  async postRequest(endpoint: string, data: any, config: AxiosRequestConfig = {}) {
    try {
      const results:AxiosResponse = await this.axios.post(`${this.apiBase}${endpoint}`, data, Object.assign(config, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }));
      return results.data;
    } catch (error) {
      const statusCode = error.response.status;
      if (statusCode === 422) {
        throw new Error(`${JSON.stringify(error.response.data, null, 2)}`);
      }
      throw error;
    }
  }

  async putRequest(endpoint: string, data: any, config: AxiosRequestConfig = {}) {
    try {
      const results:AxiosResponse = await this.axios.put(`${this.apiBase}${endpoint}`, data, Object.assign(config, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }));
      return results.data;
    } catch (error) {
      throw error;
    }
  }

  async getRequest(endpoint: string, config: AxiosRequestConfig = {}) {
    try {
      const results:AxiosResponse = await this.axios.get(`${this.apiBase}${endpoint}`, Object.assign(config, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }));
      return results.data;
    } catch (error) {
      const statusCode = error.response.status;
      if (statusCode === 422) {
        throw new Error(`${JSON.stringify(error.response.data, null, 2)}`);
      }
      throw error;
    }
  }

  async deleteRequest(endpoint: string, config: AxiosRequestConfig = {}) {
    try {
      const results:AxiosResponse = await this.axios.delete(`${this.apiBase}${endpoint}`, Object.assign(config, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }));
      return results.data;
    } catch (error) {
      throw error;
    }
  }

  getEndpoint():string {
    return this.endpoint;
  }

  protected async list(filter: any) {
    const results =  await this.getRequest(this.endpoint, {
      params: filter,
    });
    return results.data;
  }

  protected async fetch(id: number) {
    const results = await this.getRequest(`${this.endpoint}/${id}`);
    return results.data;
  }

  protected async delete(id: number) {
    const results = await this.deleteRequest(`${this.endpoint}/${id}`);
    return results.data;
  }

  protected async create(data: any) {
    const results = await this.postRequest(`${this.endpoint}`, data);
    return results.data;
  }

  protected async update(id: number, data: any) {
    const results = await this.putRequest(`${this.endpoint}/${id}`, data);
    return results.data;
  }
}
