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
  const getPopularMovies = async () => {
    try {
      const response = await $axios.get<FilmeResponse | null>(
        `/movie/popular?language=pt-BR`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getUpcomingMovies = async () => {
    try {
      const response = await $axios.get<FilmeResponse | null>(
        `/movie/upcoming?language=pt-BR`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getNowPlayingMovies = async () => {
    try {
      const response = await $axios.get<FilmeResponse | null>(
        `/movie/now_playing?language=pt-BR`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { getTopRatedMovies, getPopularMovies, getUpcomingMovies, getNowPlayingMovies };
}
