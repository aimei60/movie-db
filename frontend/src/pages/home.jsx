import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    //allows user to search for movie
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Marvel", release_date: "2022" },
    { id: 3, title: "Terminator", release_date: "2003" },
  ];
// prevents form submit from reloading the page
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          //allows to search with starting letters 
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies
          .filter((m) =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          )
          .map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
      </div>
    </div>
  );
}

export default Home;
