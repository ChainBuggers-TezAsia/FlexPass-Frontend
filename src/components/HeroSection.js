import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-row mt-20 ml-36">
      <div className="mt-20">
        <div className="text-[2.5rem] leading-[3.31rem] font-semibold flex items-center w-[42.38rem] h-[15.13rem] text-white fllex flex-col justify-start">
          Unforgettable era of entertainment through our gateway to exceptional
          shows and experiences!
          <div className="py-6">
            <img src="../Button.svg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <img
          className=" w-[32.31rem] h-[32.81rem] object-cover"
          alt=""
          src="../MobileTickets.png"
        />
      </div>
    </div>
  );
}
