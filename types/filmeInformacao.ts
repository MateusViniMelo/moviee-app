import type { GeneroFilme } from "./generoFilme";
import type { CompaniaProducao } from "./companiaProducao";
import type { PaisProducao } from "./paisProducao";
import type { Idioma } from "./idioma";

export interface FilmeInformacao {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: string;
  budget: number;
  genres: GeneroFilme[];
  homepage?: string;
  id: number;
  imdb_id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: CompaniaProducao[];
  production_countries: PaisProducao[];
  release_date: Date;
  revenue: number;
  runtime: string
  spoken_languages: Idioma[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
