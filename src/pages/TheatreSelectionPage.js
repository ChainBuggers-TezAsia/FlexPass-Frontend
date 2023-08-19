import React from "react";
import bgImg from "../assets/bg.svg";
import MovieBanner from "../components/MovieBanner";
import TheatreDetails from "../components/TheatreDetails";

export default function TheatreSelectionPage() {
  return (
    <div>
      <div className="absolute top-0 " style={{ zIndex: -2 }}>
        <img className="w-screen" src={bgImg} alt="" />
      </div>
      <MovieBanner />
      <TheatreDetails />
    </div>
  );
}
