import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "Jane's Film", release_date: "2024"}} />
    </>
  );
}

export default App;

