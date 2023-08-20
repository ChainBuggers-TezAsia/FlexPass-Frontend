import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
// import CardBase from "./components/CardBase";
// import TheatreSelectionPage from "./pages/TheatreSelectionPage";
// import TheatreSelectionPage from "./pages/TheatreSelectionPage";
import LandingPage from "./pages/LandingPage";
// import MovieCard from "./components/Movie";
import SeatSelectionPage from "./pages/SeatSelectionPage";
import MovieBanner from "../src/components/MovieBanner";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import TheatreSelectionPage from "./pages/TheatreSelectionPage";
import SignUpPage from "./pages/SignUpPage";
import MyTicketsPage from "./pages/UserPage";


function App() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div className="App">
      {
        signup && <SignUpPage setSignup={setSignup} checkSignup={signup} />
      }

      {!signup && <BrowserRouter>
        <Header setLogin={setLogin} checkLogin={login} setSignup={setSignup} checkSignup={signup} />
        <Routes>
          <Route exact path="/" element={<LandingPage setLogin={setLogin} checkLogin={login} />} />
          <Route
            exact
            path="/theatreSelection"
            element={<TheatreSelectionPage setLogin={setLogin} checkLogin={login} />}
          />
          <Route exact path="/seatSelection" element={<SeatSelectionPage />} />
          <Route exact path="/tickets" element={<MyTicketsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>}
    </div>
  );
}

export default App;