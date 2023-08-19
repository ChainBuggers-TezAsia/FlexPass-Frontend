import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-row mt-20 mx-36">
      <div className="mt-20 flex flex-col justify-start">
      <div className="font-semibold text-white">
        <div className="text-[2.5rem] leading-[3.31rem]">Unforgettable era of entertainment through our gateway to exceptional shows and experiences!</div>
        {/* <div className="text-[2.5rem] leading-[3.31rem]">exceptional shows and experiences!</div> */}
      </div>
        <div className="py-20">
          <img src="../Button.svg" alt="" />
        </div>
      </div>
      <div>
        <img
          className="w-[84.31rem] h-[32.81rem] object-cover"
          alt=""
          src="../MobileTickets.png"
        />
      </div>
    </div>
  );
}
