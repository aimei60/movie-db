const REACT_API_Key = process.env.API_KEY;
const URL = process.env.BASE_URL;

// request to API and returns movie results
export const getPopularMovies = async () => {
    const response = await fetch(`${URL}/movie/popular?api_key=${REACT_API_Key}`);
    const data = await response.json()
    return data.results
};

//searches for movies using query (makes the query URL-safe with encodeURIComponent)
export const searchPopularMovies = async (query) => {
    const response = await fetch(`${URL}/search/movie/?api_key=${REACT_API_Key}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};
