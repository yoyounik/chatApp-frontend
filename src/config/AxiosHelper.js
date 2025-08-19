import axios from "axios";
export const baseURL = "https://chatapp-backend-67bn.onrender.com";
export const httpClient = axios.create({
  baseURL: baseURL,
});