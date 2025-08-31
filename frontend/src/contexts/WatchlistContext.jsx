import { createContext, useState, useContext } from "react"

const WatchlistContext = createContext()

export const useWatchlistContext = () => useContext(WatchlistContext)

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([])

    const addToWatchlist = (movie) => {
        setWatchlist(prev => [...prev, movie])
    }

    const removeFromWatchlist = (movieId) => {
        setWatchlist(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isInWatchlist = (movieId) => {
        return watchlist.some(movie => movie.id === movieId)
    }

    const value = {
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist
    }

    return (
        <WatchlistContext.Provider value={value}>
            {children}
        </WatchlistContext.Provider>
    )
}
