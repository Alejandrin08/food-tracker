import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8081/api", 
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("Error: ", error);
    return Promise.reject(error.response || error.message);
  }
);

export default httpClient;
