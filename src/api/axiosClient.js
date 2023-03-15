import axios from "axios";

const client = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "https://63de969a3d94d02c0bade940.mockapi.io/api/v1",
});

export default client;
