import React from "react";
import bgImg from "../assets/bg.svg";
// import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SeatSelectionPage() {
  return (

    <div>
      {/* <Header /> */}
      <div className="absolute top-0 " style={{ zIndex: -2 }}>
        <img className="w-screen" src={bgImg} alt="" />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
