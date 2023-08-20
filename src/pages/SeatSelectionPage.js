import React from 'react';
import SeatSelector from '../components/SeatSelector'; // Make sure to provide the correct path to your SeatSelector component
import bgImg from '../assets/bg.svg'; // Adjust the path to your SVG background image
import MovieBanner from '../components/MovieBanner';

const SeatSelectionPage = () => {
  return (
    <div className="relative min-h-screen">
      <img className="absolute top-0 w-full h-full object-cover z-0" src={bgImg} alt="Background" />
      <MovieBanner/>
      <div className="relative bg-white shadow-[0px_0px_10px_#fff] [backdrop-filter:blur(16px)] w-full h-[107px]" />
      <div className="relative z-10" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <SeatSelector />
      </div>
    </div>
  );
};

export default SeatSelectionPage;
