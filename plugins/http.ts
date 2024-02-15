import MovieGenreService from "~/services/movieGenreService";
import MovieService from "~/services/movieService";
import type { IHttp } from "~/types/IHttp";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const fetcher = $fetch.create({
    baseURL: config.public.apiUrl,

    onRequest({ request, options }) {
      const headers = {
        Authorization: `Bearer ${config.public.apiKey}`,
        Accept: "application/json",
      };
      
      options.headers = Object.assign(headers, options.headers);
    },
  });
  const httpServices: IHttp = {
    movie: new MovieService(fetcher),
    movieGenre: new MovieGenreService(fetcher),
  };
  return {
    provide: {
      http: httpServices,
    },
  };
});
