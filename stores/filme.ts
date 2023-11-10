import { defineStore } from "pinia";
import type { FilmeResponse } from "~/types/filmeResponse";
import type { GeneroFilme } from "~/types/generoFilme";

export const useFilmeStore = defineStore("filme", () => {
  const { getGenresMovies } = useGenreMovie();
  const { getTopRatedMovies, getPopularMovies, getUpcomingMovies, getNowPlayingMovies } =
    useMovies();
  const filmesBemAvaliados = ref<FilmeResponse | null>();
  const filmesPopulares = ref<FilmeResponse | null>();
  const filmesLancadosEmBreve = ref<FilmeResponse | null>();
  const filmesEmCartaz = ref<FilmeResponse | null>();
  const generosFilmes = ref<GeneroFilme[] | null>();
  const loadFilmesBemAvaliados = async () => {
    filmesBemAvaliados.value = await getTopRatedMovies();
  };

  const loadFilmesPopulares = async () => {
    filmesPopulares.value = await getPopularMovies();
  };
  const loadGenerosFilmes = async () => {
    generosFilmes.value = await getGenresMovies();
  };
  const loadFilmesLancadosEmBreve = async () => {
    filmesLancadosEmBreve.value = await getUpcomingMovies();
  };

  const loadFilmesEmCartaz = async () => {
    filmesEmCartaz.value = await getNowPlayingMovies();
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
