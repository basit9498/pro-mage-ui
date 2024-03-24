import axios from "axios";

const baseURL = "http://localhost:5000/api/v1";

const http = axios.create({ baseURL: `${baseURL}` });

function getAuthHeader() {
  let authHeader = { "Content-Type": "application/json" };
  return authHeader;
}

function get(url, headers = {}, params = {}) {
  return http.get(url, {
    params,
    headers: { ...getAuthHeader(), ...headers },
  });
}

function post(url, data, headers = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers: { ...getAuthHeader(), ...headers },
  });
}

function put(url, data, headers = {}) {
  return http.put(url, data, {
    headers: { ...getAuthHeader(), ...headers },
  });
}

function remove(url, data, headers = {}, params = {}) {
  return http.delete(
    url,
    {
      ...params,
      headers: { ...getAuthHeader(), ...headers },
    },
    data
  );
}

export default { get, post, put, remove };
