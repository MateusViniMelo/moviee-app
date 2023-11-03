import { defineStore } from "pinia";
import type { FilmeResponse } from "~/types/filmeResponse";
import type { GeneroFilme } from "~/types/generoFilme";

export const useFilmeStore = defineStore("filme", () => {
  const { getGenresMovies } = useGenreMovie();
  const { getTopRatedMovies } = useMovies();
  const filmeResponse = ref<FilmeResponse | null>();
  const generosFilmes = ref<GeneroFilme[] | null>();
  const loadFilmesBemAvaliados = async () => {
    filmeResponse.value = await getTopRatedMovies();
  };
  const loadGenerosFilmes = async () => {
    generosFilmes.value = await getGenresMovies();
  };
  return { filmeResponse, loadFilmesBemAvaliados, loadGenerosFilmes };
});
