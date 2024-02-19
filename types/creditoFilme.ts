import type { PessoaElenco } from "./pessoaElenco";
import type { PessoaEquipe } from "./pessoaEquipe";

export interface CreditoFilme {
  id: number;
  cast: PessoaElenco[];
  crew: PessoaEquipe[];
}
