import "./css/App.css";
import Favourites from "./pages/favourites";
import Home from "./pages/home";
import WatchList from "./pages/Watchlist";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { WatchlistProvider } from "./contexts/WatchlistContext";

// dark and light mode set up
function getInitialMode() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    return saved;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function App() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", mode);
  }, [mode]);

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  let nextLabel;
  if (mode === "dark") {
    nextLabel = "light";
  } else {
    nextLabel = "dark";
  }

//home page details
  return (
  <MovieProvider>
    <WatchlistProvider>
      <NavBar />
      <main className="main-content">
        <button onClick={toggleMode} style={{ alignSelf: "flex-end", marginBottom: "1rem" }}> Switch to {nextLabel}</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </main>
    </WatchlistProvider>
  </MovieProvider>
);
}
