import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
// import CardBase from "./components/CardBase";
//import TheatreSelectionPage from "./pages/TheatreSelectionPage";
// import TheatreSelectionPage from "./pages/TheatreSelectionPage";
import LandingPage from "./pages/LandingPage";
// import MovieCard from "./components/Movie";
// import SeatSelectionPage from "./pages/SeatSelectionPage";
import MovieBanner from '../src/components/MovieBanner'

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">

      <MovieBanner />

    </div>
  );
}

export default App;
