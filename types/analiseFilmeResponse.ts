import type { AnaliseFilme } from "./analiseFilme";

export interface AnaliseFilmeResponse {
  id: number;
  page: number;
  results: AnaliseFilme[];

  total_pages: number;
  total_results: number;
}
