import { Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/home";
import { Route } from "react-router-dom";
import Favourites from "./pages/favourites";
import NavBar from "./components/NavBar";

//routes to home and favourites pages
function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
    </div>
    
  );
}

export default App;

