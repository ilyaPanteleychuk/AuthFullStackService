import axios from "axios";

export const API_URL = "http://localhost:8080/api/v1";

export const $api = axios.create({
  withCredentials: false,
  baseURL: API_URL,
});
