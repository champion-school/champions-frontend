import axios from "axios";

const api = axios.create({
  baseURL: "https://api.cismdu.in", // Spring Boot port
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
