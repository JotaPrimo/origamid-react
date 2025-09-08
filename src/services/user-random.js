import { api } from "./api";

export async function buscarTodos() {
  const response = await api.get();  
  return response.data.results;
}