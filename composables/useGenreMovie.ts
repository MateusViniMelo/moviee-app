import type { GeneroFilme } from "~/types/generoFilme";
import type { GeneroFilmeResponse } from "~/types/generoFilmeResponse";

export default function () {
  const config = useRuntimeConfig();
  const { $axios } = useNuxtApp();

  const getGenresMovies = async (): Promise<GeneroFilme[] | undefined> => {
    try {
      const response = await $axios.get<GeneroFilmeResponse | null>(
        `/genre/movie/list?language=pt-BR`
      );

      return response.data?.genres;
    } catch (error) {
      console.log(error);
    }
  };

  const getGenresByIds = (
    generosFilmes: GeneroFilme[],
    generosIds: number[]
  ) => {
    const generosFiltrados: GeneroFilme[] = generosFilmes.filter(
      (obj: GeneroFilme) => generosIds.includes(obj.id)
    );

    return generosFiltrados;
  };

  const getGenres = async (
    generosIds: number[]
  ): Promise<GeneroFilme[] | undefined> => {
    const generosFilmes: GeneroFilme[] | undefined = await getGenresMovies();

    if (generosFilmes !== undefined) {
      const generosFiltrados: GeneroFilme[] = getGenresByIds(
        generosFilmes,
        generosIds
      );

      return generosFiltrados;
    }
  };
  return { getGenresMovies, getGenresByIds, getGenres };
}
