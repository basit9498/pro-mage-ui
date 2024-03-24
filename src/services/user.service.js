import httpService from "./http.service";

export const getMangersAPI = () =>
  httpService
    .get(`/user/get-managers`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
