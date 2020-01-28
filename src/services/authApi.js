import axios from "axios";

const authApi = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL
});

export default authApi;
