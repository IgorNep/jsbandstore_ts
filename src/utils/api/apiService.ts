import axios from 'axios';
import { endpoints } from './endpoints';

type EndpointsType = {
  signin: string;
  books: string;
};
type DataType = {
  username: string;
};
type HeadersType = {
  Authorization: string;
};
type ParamsType = {
  headers: HeadersType;
};

class ApiService {
  url: string;
  endpoints: EndpointsType;
  constructor(url: string, endpoints: EndpointsType) {
    this.url = url;
    this.endpoints = endpoints;
  }

  async postData(endpoint: string, formData: DataType) {
    const res = await axios.post(`${this.url}/${endpoint}`, formData);
    return res.data;
  }
  async getData(endpoint: string, params: ParamsType) {
    const res = await axios.get(`${this.url}/${endpoint}`, params);
    return res.data;
  }
  async getDataById(endpoint: string, id: string, config: ParamsType) {
    const res = await axios.get(`${this.url}/${endpoint}/${id}`, config);
    return res.data;
  }
}

const apiService = new ApiService(
  'https://js-band-store-api.glitch.me',
  endpoints,
);
export default apiService;
