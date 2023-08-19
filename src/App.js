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
<<<<<<< HEAD
      {/* <Header setLogin={setLogin} checkLogin={login} className="z-10" />
      {login && (
        <div>
          <Login />
        </div>
      )} */}
      <SeatSelectionPage />
=======

      <MovieBanner />
>>>>>>> ccae45412b8fe2df98f12736599980f0b402f040

    </div>
  );
}

export default App;
