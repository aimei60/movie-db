import moviesData from "../data/movies.json";

export const getPopularMovies = async () => {
  return Array.isArray(moviesData) ? moviesData : [];
};

export const searchMovies = async (query = "") => {
  const q = query.toLowerCase();
  return (Array.isArray(moviesData) ? moviesData : []).filter(m =>
    m.title?.toLowerCase().includes(q)
  );
};
