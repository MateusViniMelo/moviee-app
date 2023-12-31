import type { Filme } from "./filme";

export interface FilmeResponse {
  page: number;
  results: Filme[];
  total_pages: number;
  total_results: number;
}
