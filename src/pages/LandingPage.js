import React from "react";
import Header from "../components/Header";
import bgImg from "../assets/bg.svg";
import CardBase from "../components/CardBase";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <div className="absolute top-0 " style={{ zIndex: -2 }}>
        <img className="z-0 w-screen" src={bgImg} alt="" />
      </div>
      <div className="flex flex-row">
        <div>
          Unforgettable era of entertainment through our gateway to exceptional
          shows and experiences!
          <div>Button</div>
        </div>
        <div>
          <img src="/MobileTickets" alt="" />
        </div>
      </div>
      <div>
        <CardBase />
      </div>
      <Footer />
    </div>
  );
}
