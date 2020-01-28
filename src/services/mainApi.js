import axios from "axios";

const authApi = axios.create({
  baseURL: process.env.REACT_APP_MAIN_SERVICE_URL
});

authApi.interceptors.request.use(function(config) {
  config.url += `?apiKey=${process.env.REACT_APP_API_KEY}`;

  return config;
});

export default authApi;
