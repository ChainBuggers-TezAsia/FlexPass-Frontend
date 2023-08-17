import React, {useState} from "react";
import Header from "../components/Header";
import bgImg from "../assets/bg.svg";
import CardBase from "../components/CardBase";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Login from "../components/Login";

export default function LandingPage() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <Header setLogin={setLogin} checkLogin={login} className="z-10"/>
      <div className="absolute top-0 " style={{ zIndex: -2 }}>
        <img className="z-0 w-screen" src={bgImg} alt="" />
      </div>
      {login && <div>
        <Login/>
      </div>}
      <HeroSection />
      <div>
        <CardBase />
      </div>
      <Footer />
    </div>
  );
}
