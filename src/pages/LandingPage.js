import React, { useState } from "react";
import Header from "../components/Header";
import bgImg from "../assets/bg.svg";
import CardBase from "../components/CardBase";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Login from "../components/Login";

export default function LandingPage() {
  const [login, setLogin] = useState(false);
  const cardBaseMarginTop = 120;

  return (
    <div className="relative min-h-screen">
      <img className="absolute top-0 w-full h-full object-cover z-0" src={bgImg} alt="" />

      {/* Content */}
      <div className="relative z-10">
        {/* <Header setLogin={setLogin} checkLogin={login} className="z-10" /> */}
        {login && <div>
          <Login />
        </div>}
        <HeroSection />
        {/* <div style={{ marginTop: `${cardBaseMarginTop}px` }}> */}
        <div>
          <CardBase />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
