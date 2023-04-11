import axios from "axios";

// THIS IS OUR FASTAPI SERVER LINK
const serverUrl = "http://localhost:8000/";

export const api = axios.create({
  baseURL: serverUrl,
  withCredentials: false,
});
