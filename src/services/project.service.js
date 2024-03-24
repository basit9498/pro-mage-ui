import { signChecking } from "../helper/signChecking";
import httpService from "./http.service";

export const createProjectAPI = (payload) =>
  httpService
    .post(`/project/create`, payload)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const updateProjectAPI = (payload) =>
  httpService
    .post(`/project/update`, payload)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getProjectsAPI = (query = {}) => {
  let url = "/project/all";
  if (Object.keys(query).length > 0) {
    url += "?";
    Object.keys(query).forEach((key) => {
      url = signChecking("?", url);
      url += `${key}=${query[key]}`;
    });
  }
  return httpService
    .get(url)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
};

export const getSingleProjectsAPI = (id) =>
  httpService
    .get(`/project/${id}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const createProjectTaskAPI = (payload) =>
  httpService
    .post(`/project/task/create`, payload)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const updateProjectTaskAPI = (payload) =>
  httpService
    .post(`/project/task/update`, payload)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
