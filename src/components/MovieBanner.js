import React from "react";
import moviebg from "../assets/moviebg.png";

export default function MovieBanner() {
  return (
    <div>
      <div>
        <img
          className="relative w-full h-[66vh] object-cover"
          alt=""
          src={moviebg}
          style={{ zIndex: 1 }}
        />
        <span
          className="absolute top-[50vh] left-[30vw] text-white"
          style={{ zIndex: 1 }}
        >
          <p className="my-1 ml-2" style={{ fontSize: "20px" }}>
            Release Date: 2 June 2023
          </p>
          <p className="my-2" style={{ fontSize: "60px" }}>
            Spider Man
          </p>
        </span>
      </div>
      <div className="bg-[#1A142FCC] h-[34vh]">
        <div className="absolute top-[70vh] left-[30vw] text-white">
          <div className="flex flex-row ">
            <span
              className="relative rounded-[11px] box-border flex flex-row py-1 px-6 items-start justify-center text-left text-[12px] text-gray font-roboto border-[1px] border-solid border-gray mx-4"
              style={{
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              ACTION
            </span>
            <span
              className="relative rounded-[11px] box-border flex flex-row py-1 px-6 items-start justify-center text-left text-[12px] text-gray font-roboto border-[1px] border-solid border-gray mx-4"
              style={{
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              ADVENTURE
            </span>
            <span
              className="relative rounded-[11px] box-border flex flex-row py-1 px-6 items-start justify-center text-left text-[12px] text-gray font-roboto border-[1px] border-solid border-gray mx-4"
              style={{
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              ANIMATION
            </span>
          </div>
          <div className="flex flex-row mt-8">
            <div className="w-[30vw]">
              <span style={{ fontSize: "24px" }}>Date</span>
              <div className="flex flex-row " style={{ fontSize: "18 px" }}>
                <span className="py-3 mr-4"> &lt;</span>
                <span className="mx-2 text-center">
                  28 Aug
                  <br />
                  Mon
                </span>
                <span className="mx-2 text-center">
                  28 Aug
                  <br />
                  Mon
                </span>
                <span className="mx-2 text-center">
                  28 Aug
                  <br />
                  Mon
                </span>
                <span className="py-3 ml-4"> &gt;</span>
              </div>
            </div>
            <div className="w-[30vw]">
              <span style={{ fontSize: "24px" }}>Available Date</span>
              <div className="flex flex-row " style={{ fontSize: "18 px" }}>
                <span className="mr-4"> &lt;</span>
                <span className="mx-2 text-center">10:30 Pm</span>
                <span className="mx-2 text-center">11:00 Pm</span>
                <span className="mx-2 text-center">11:30 Pm</span>
                <span className="ml-4"> &gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute top-[60vh] left-[8vw] w-[18vw] h-[15vh] flex content-center m-auto justify-center items-center" style={{zIndex:2, borderRadius:"30px"}}>
        <img src="nft-picture@2x.png" alt="" className="w-[15vw] h-[40vh]" />
      </div>
    </div>
  );
}
