import axios from "axios";

// Criando uma instância da API
export const api = axios.create({
  baseURL: "https://randomuser.me/api/?results=10",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});