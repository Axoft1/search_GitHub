import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    accept: "application/vnd.github+json"
  },
  baseURL: "https://api.github.com/search",
  responseType: "json",
});

export default axiosInstance