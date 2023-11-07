import axios from "../config/axios";

export const GetRequest = (url: string, config: {} = {}) => {
  return axios.get(url, config);
};

export const PostRequest = (url: string, data: {}, config: {} = {}) => {
  return axios.post(url, data, config);
};

export const PatchRequest = (url: string, data: {}, config: {} = {}) => {
  return axios.patch(url, data, config);
};

export const PutRequest = (url: string, data: {}, config: {} = {}) => {
  //only for update not post
  return axios.put(url, data, config);
};

export const DeleteRequest = (url: string, data?: any) => {
  return axios.delete(url, { data });
};
