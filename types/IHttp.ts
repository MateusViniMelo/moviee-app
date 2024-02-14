import type MovieGenreService from "~/services/movieGenreService";
import type MovieService from "~/services/movieService";

export interface IHttp{

    movie: MovieService
    movieGenre: MovieGenreService
}