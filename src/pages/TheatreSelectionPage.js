import React from "react";
import bgImg from "../assets/bg.svg";
import MovieBanner from "../components/MovieBanner";
import TheatreDetails from "../components/TheatreDetails";

export default function TheatreSelectionPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Image */}
      <img className="absolute top-0 w-full h-full object-cover z-0" src={bgImg} alt="" />

      {/* Content */}
      <div className="relative z-10">
        <MovieBanner />
        <div className="container mx-auto mt-10 p-4">
          <TheatreDetails />
        </div>
      </div>
    </div>
  );
}
