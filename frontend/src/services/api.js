// frontend/src/services/api.js
const BASE = import.meta.env.BASE_URL || "/"; // /movie-db/ on Pages or '/' locally

async function getJSON(path) {
  const res = await fetch(BASE + path);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} for ${BASE + path}\n${text.slice(0,150)}...`);
  }
  return res.json();
}

export const getPopularMovies = async () => {
  const data = await getJSON("data/movies.json");
  return Array.isArray(data) ? data : [];
};

export const searchMovies = async (query) => {
  const q = (query || "").toLowerCase();
  const all = await getPopularMovies();
  return all.filter(
    (m) =>
      m.title?.toLowerCase().includes(q)
  );
};
