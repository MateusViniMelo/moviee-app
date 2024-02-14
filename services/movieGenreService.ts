import type { $Fetch } from "ofetch";

import type { GeneroFilme } from "~/types/generoFilme";

export default class MovieGenreService {
  private fetch: $Fetch;

  constructor(fetch: any) {
    this.fetch = fetch;
  }

  async getGenresMovies(): Promise<GeneroFilme[]> {
    const result = await this.fetch<GeneroFilme[]>(
      `/genre/movie/list?language=pt-BR`,
      { method: "GET" }
    );

    return result;
  }

  private async getGenresByIds(
    generosFilmes: GeneroFilme[],
    generosIds: number[]
  ): Promise<GeneroFilme[]> {
    const generosFiltrados: GeneroFilme[] = generosFilmes.filter(
      (obj: GeneroFilme) => generosIds.includes(obj.id)
    );

    return generosFiltrados;
  }

  async getGenres(generosIds: number[]): Promise<GeneroFilme[]> {
    const generosFilmes: GeneroFilme[] = await this.getGenresMovies();

    //if (generosFilmes !== undefined) {
    let generosFiltrados: GeneroFilme[] = [];

    generosFiltrados = await this.getGenresByIds(generosFilmes, generosIds);

    return generosFiltrados;
    //}
  }
}
