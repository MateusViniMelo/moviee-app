import type { $Fetch } from "ofetch";
import type { CreditoFilme } from "~/types/creditoFilme";

import type { FilmeInformacao } from "~/types/filmeInformacao";
import type { FilmeResponse } from "~/types/filmeResponse";
import type { movieImagens } from "~/types/movieImagens";


export default class MovieService {
  private fetch: $Fetch;

  constructor(fetch: any) {
    this.fetch = fetch;
  }

  async getTopRatedMovies() {
    const result = await this.fetch<FilmeResponse>(
      `/movie/top_rated?language=pt-BR`,
      { method: "GET" }
    );

    return result;
  }

  async getPopularMovies() {
    const result = await this.fetch<FilmeResponse>(
      `/movie/popular?language=pt-BR`,
      {
        method: "GET",
      }
    );

    return result;
  }

  async getUpcomingMovies() {
    const result = await this.fetch<FilmeResponse>(
      `/movie/upcoming?language=pt-BR`,
      {
        method: "GET",
      }
    );

    return result;
  }

  async getNowPlayingMovies() {
    const result = await this.fetch<FilmeResponse>(
      `/movie/now_playing?language=pt-BR`,
      {
        method: "GET",
      }
    );

    return result;
  }
  async getMovieByGenre(genreId: any, page: string | number = 1) {
    const result = await this.fetch<FilmeResponse>(
      `/discover/movie?language=pt-BR&with_genres=${genreId}&page=${page}`,
      { method: "GET" }
    );

    return result;
  }
  async getMovieById(id: any) {
    const result = await this.fetch<FilmeInformacao>(
      `/movie/${id}?language=pt-BR`,
      {
        method: "GET",
      }
    );

    return result;
  }
  async getMovieDetailById(id: any) {
    const result = await this.fetch<CreditoFilme>(
      `/movie/${id}/credits?language=pt-BR`,
      {
        method: "GET",
      }
    );

    return result;
  }

  async getMovieImagesById(id: any) {
    const result = await this.fetch<movieImagens>(
      `/movie/${id}/images?language=en-US,null`,
      {
        method: "GET",
      }
    );

    return result;
  }
  async getMoviesRecommendations(id: any) {

     const result = await this.fetch<FilmeResponse>(
      `/movie/${id}/recommendations?language=pt-BR`,
      {
        method: "GET",
      }
    );
      
    return result;
  }

}
