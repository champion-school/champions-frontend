import axios from "axios";

const api = axios.create({
  baseURL: "champions-backend-aeekd8bgduc7edhc.centralindia-01.azurewebsites.net", // Spring Boot port
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
