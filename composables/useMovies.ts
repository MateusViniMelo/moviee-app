import type { FilmeResponse } from "~/types/filmeResponse";


export default function () {
  const config = useRuntimeConfig();
  const { $axios } = useNuxtApp();
  const getTopRatedMovies = async () => {
    try {
      const response = await $axios.get<FilmeResponse | null>(
        `/movie/top_rated?language=pt-BR`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
 
  return { getTopRatedMovies };
}
