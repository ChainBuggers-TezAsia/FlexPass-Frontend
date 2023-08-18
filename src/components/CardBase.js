import React from "react";
import MovieCard from "./Movie";
export default function CardBase() {
  return (
    // <div className="text-white  left-[7.69rem] text-[3rem] tracking-[0.05em] capitalize font-semibold inline-block w-[40.44rem] h-[5.88rem]">
      // Movies
      <div className="text-white capitalize font-semibold  text-[4rem]">
        <span className="p-20">Movies</span>
        
        <div className="grid grid-cols-3 justify-items-center ">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
    </div>
  );
}
