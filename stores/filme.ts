import { defineStore } from "pinia";
import type { Filme } from "~/types/filme";
import type { FilmeResponse } from "~/types/filmeResponse";
import type { GeneroFilme } from "~/types/generoFilme";

export const useFilmeStore = defineStore("filme", () => {

  const {$http} = useNuxtApp()
  
 
  const filmesBemAvaliados = ref<FilmeResponse>();
  const filmesPopulares = ref<FilmeResponse | null>();
  const filmesLancadosEmBreve = ref<FilmeResponse | null>();
  const filmesEmCartaz = ref<FilmeResponse | null>();
  const generosFilmes = ref<GeneroFilme[] | null>();


  const loadFilmesBemAvaliados = async () => {
    
    filmesBemAvaliados.value = await $http.movie.getTopRatedMovies();
  };

  const loadFilmesPopulares = async () => {
    filmesPopulares.value = await $http.movie.getPopularMovies();
  };
  const loadGenerosFilmes = async () => {
    generosFilmes.value = await $http.movieGenre.getGenresMovies();
  };
  const loadFilmesLancadosEmBreve = async () => {
    filmesLancadosEmBreve.value = await $http.movie.getUpcomingMovies();
  };

  const loadFilmesEmCartaz = async () => {
    filmesEmCartaz.value = await $http.movie.getNowPlayingMovies();
  };
  return {
    filmesBemAvaliados,
    filmesPopulares,
    loadFilmesBemAvaliados,
    loadFilmesLancadosEmBreve,
    loadFilmesEmCartaz,
    loadFilmesPopulares,
    loadGenerosFilmes,
    filmesLancadosEmBreve,
    filmesEmCartaz
  };
});
