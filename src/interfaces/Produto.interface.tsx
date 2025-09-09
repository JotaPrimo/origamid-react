import type { Foto } from "./Foto.interface";

export interface Produto {
  id: string,
  nome: string,  
  preco: string,
  descricao: string,
  fotos: Foto[],
}