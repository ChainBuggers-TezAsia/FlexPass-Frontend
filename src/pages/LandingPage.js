import React from "react";
import Header from "../components/Header";
import bgImg from "../assets/bg.svg";
import CardBase from "../components/CardBase";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function LandingPage() {
  return (
    <div>
      <div className="absolute top-0 " style={{ zIndex: -2 }}>
        <img className="w-screen" src={bgImg} alt="" />
      </div>
      <Header />
      <HeroSection />
      <CardBase />
      <Footer />
    </div>
  );
}
