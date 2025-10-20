import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useWatchlistContext } from "../contexts/WatchlistContext";

function MovieCard({movie}) {
    const {isFavourite, addToFavourites, removeFromFavourites} = useMovieContext()
    const favourite = isFavourite(movie.id)

    function onFavouriteClick(e) {
        e.preventDefault()
        if (favourite) removeFromFavourites(movie.id)
        else addToFavourites(movie)
    }

    const {addToWatchlist, removeFromWatchlist, isInWatchlist} = useWatchlistContext()
    const watchlist = isInWatchlist(movie.id)

    function onWatchlistClick(e) {
        e.preventDefault()
        if (watchlist) removeFromWatchlist(movie.id)
        else addToWatchlist(movie)
            
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favourite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>
                    ♥
                </button>
                <button className={`watchlist-btn ${watchlist ? "active" : ""}`} onClick={onWatchlistClick}>
                    ★
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard