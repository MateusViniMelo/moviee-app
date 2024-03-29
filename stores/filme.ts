import { defineStore } from "pinia";
import type { Filme } from "~/types/filme";
import type { FilmeResponse } from "~/types/filmeResponse";
import type { GeneroFilme } from "~/types/generoFilme";

export const useFilmeStore = defineStore("filme", () => {
  const { $http } = useNuxtApp();

  const paginasTotais = ref<number>(1);
  const paginaAtual = ref<number>(1);
  const filmesBemAvaliados = ref<FilmeResponse>();
  const filmesPopulares = ref<FilmeResponse | null>();
  const filmesLancadosEmBreve = ref<FilmeResponse | null>();
  const filmesEmCartaz = ref<FilmeResponse | null>();
  const filmesPorGenero = ref<FilmeResponse>();
  const filmesPesquisados = ref<FilmeResponse>();
  const exibirFilmesIniciais = ref<boolean>(true);
  const loadFilmesBemAvaliados = async () => {
    filmesBemAvaliados.value = await $http.movie.getTopRatedMovies();
  };

  const loadFilmesPopulares = async () => {
    filmesPopulares.value = await $http.movie.getPopularMovies();
  };

  const loadFilmesLancadosEmBreve = async () => {
    filmesLancadosEmBreve.value = await $http.movie.getUpcomingMovies();
  };
  const loadFilmesbyGenero = async (id: any, paginaAtual: number | string) => {
    filmesPorGenero.value = await $http.movie
      .getMovieByGenre(id, paginaAtual)
      .finally(() => {
        if (filmesPorGenero.value?.total_pages !== undefined) {
          paginasTotais.value = filmesPorGenero.value?.total_pages;
        }
      });
  };
  const loadFilmesEmCartaz = async () => {
    filmesEmCartaz.value = await $http.movie.getNowPlayingMovies();
  };

  const loadFilmesPesquisados = async (pesquisa: string) => {
    //paginasTotais.value = 1;

    filmesPesquisados.value = await $http.movie
      .searchMovies(pesquisa, paginaAtual.value)
      .finally(() => {
        if (filmesPesquisados.value?.total_pages !== undefined) {
          paginasTotais.value = filmesPesquisados.value?.total_pages;
        }
      });
  };
  return {
    filmesBemAvaliados,
    filmesPopulares,
    loadFilmesBemAvaliados,
    loadFilmesLancadosEmBreve,
    loadFilmesEmCartaz,
    loadFilmesPopulares,
    loadFilmesbyGenero,
    filmesLancadosEmBreve,
    filmesEmCartaz,
    filmesPorGenero,
    paginaAtual,
    paginasTotais,
    loadFilmesPesquisados,
    filmesPesquisados,
    exibirFilmesIniciais,
  };
});
