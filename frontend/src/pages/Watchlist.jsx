import "../css/Watchlist.css";
import { useWatchlistContext } from "../contexts/WatchlistContext";
import MovieCard from "../components/MovieCard";

function WatchList() {
  const { watchlist } = useWatchlistContext();

  if (watchlist) {
    return (
      <div className="watchlist">
        <h2>Your Watch List</h2>
        <div className="movies-grid">
          {watchlist.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default WatchList;
