import { request } from 'umi';
import MovieData from '../types/movieDataInterface';

export const getMovies = async (): Promise<MovieData[]> => {
  const response = await request(
    'https://dhvye6e1ul.execute-api.us-east-1.amazonaws.com/dev/get_movies',
    {
      method: 'get',
    },
  );
  const movies: MovieData[] = response.movies;
  return movies;
};
