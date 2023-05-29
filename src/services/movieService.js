import MoviesClient from "@/modules/axios";

export const popularMovies = async (page = 1) => {
  const res = await MoviesClient.get(`/movie/popular?page=${page}`);
  return res.data;
};

export const getGenreList = async () => {
  const res = await MoviesClient.get(`/genre/movie/list`);
  return res.data;
};

export const queryMovies = async (query, page = 1) => {
  const res = await MoviesClient.get(
    `/movie/search?query=${query}&page=${page}`
  );

  return res.data;
};
