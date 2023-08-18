import React from "react";
import Date from "../components/Date";
import Time from "../components/Time";

export default function MovieBanner() {
  return (
    <div className="flex flex-col">
      <img
        className="relative w-full h-[490px] object-cover"
        alt=""
        src="movie-banner.png"
      />
      <div className="relative bg-gray w-full h-[12.06rem]">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div
              className="relative rounded-[11px] box-border flex flex-row py-[0.17rem] pr-[0.49rem] pl-[0.54rem] items-start justify-start text-left text-[0.63rem] text-gray font-roboto border-[1px] border-solid border-gray"
              style={{
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <div className="relative uppercase">Action</div>
            </div>
            <div
              className="relative rounded-[11px] box-border flex flex-row py-[0.17rem] pr-[0.53rem] pl-[0.54rem] items-start justify-start text-left text-[0.63rem] text-gray font-roboto border-[1px] border-solid border-gray"
              style={{
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <div className="relative uppercase">Adventure</div>
            </div>
            <div
              className="relative rounded-[11px] box-border flex flex-row py-[0.17rem] pr-[0.52rem] pl-[0.54rem] items-start justify-start text-left text-[0.63rem] text-gray font-roboto border-[1px] border-solid border-gray"
              style={{
                borderColor: "rgba(255, 255, 255, 0.5)",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <div className="relative uppercase">animation</div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="relative text-[1.13rem] tracking-[0.05em] capitalize font-semibold font-poppins text-white text-left inline-block w-[7.25rem] h-[2.25rem]">
              Date
              <div flex flex-col>
                <Date />
              </div>
            </div>

            <div className="relative text-[1.13rem] tracking-[0.05em] capitalize font-semibold font-poppins text-white text-left inline-block w-[7.25rem] h-[2.25rem]">
              Available TIme
              <div flex flex-col>
                <Time />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
