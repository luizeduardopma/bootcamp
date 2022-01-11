import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://1u6cf6gka7.execute-api.us-east-1.amazonaws.com/dev/",
});

export default axiosInstance;
