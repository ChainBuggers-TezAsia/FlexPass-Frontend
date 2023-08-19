import React from "react";
import bgImg from "../assets/bg.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SeatSelectionPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Image */}
      <img className="absolute top-0 w-full h-full object-cover z-0" src={bgImg} alt="" />

      {/* Content */}
      <div className="relative z-10">
        {/* <Header /> */}
        <main className="container mx-auto mt-10 p-4">
          <h1 className="text-3xl font-semibold mb-4">Select Your Seats</h1>
          {/* Your seat selection components go here */}
        </main>
      </div>
      <div className="absolute bottom-0 w-full">
        {/* <Footer /> */}
      </div>
    </div>
  );
}
  