import axios from "axios";

export function get(url) {
  return axios.get(url, {
    withCredentials: true,
  });
}

export function post(url, reqData) {
  return axios.post(url, reqData, {
    withCredentials: true,
  });
}

export function del(url) {
  return axios.delete(url, {
    withCredentials: true,
  });
}

export function put(url, reqData) {
  return axios.put(url, reqData, {
    withCredentials: true,
  });
}

export function all(arr) {
  return axios.all(arr);
}
