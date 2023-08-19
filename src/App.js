import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
// import CardBase from "./components/CardBase";
//import TheatreSelectionPage from "./pages/TheatreSelectionPage";
// import TheatreSelectionPage from "./pages/TheatreSelectionPage";
// import LandingPage from "./pages/LandingPage";
// import MovieCard from "./components/Movie";
import SeatSelectionPage from "./pages/SeatSelectionPage";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Header setLogin={setLogin} checkLogin={login} className="z-10" />
      {login && (
        <div>
          <Login />
        </div>
      )}
      <SeatSelectionPage />

    </div>
  );
}

export default App;
