import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import TheatreSelectionPage from "./pages/TheatreSelectionPage";
import SeatSelectionPage from './pages/SeatSelectionPage'
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import PaymentPage from "./pages/PaymentPage";


function App() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div className="App">
      {
        signup && <SignUpPage setSignup={setSignup} checkSignup={signup} setLogin={setLogin} checkLogin={login}/>
      }

      {!signup && <BrowserRouter>
        <Header setLogin={setLogin} checkLogin={login} setSignup={setSignup} checkSignup={signup} />
        <Routes>
          <Route exact path="/" element={<LandingPage setLogin={setLogin} checkLogin={login} setSignup={setSignup} checkSignup={signup}/>} />
          <Route
            exact
            path="/theatreSelection"
            element={<TheatreSelectionPage setLogin={setLogin} checkLogin={login} />}
          />
          <Route exact path="/seatSelection" element={<SeatSelectionPage setLogin={setLogin} checkLogin={login}/>} />
          <Route exact path="/user" element={<UserPage />} />
          <Route exact path="/payment" element={<PaymentPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>}
    </div>
  );
}

export default App;