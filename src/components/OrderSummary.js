import React, { useState } from "react";

export default function OrderSummary(props) {
  // const [seatType, setSeatType] = useState({
  //   budget:0,
  //   elite:0
  // });
  const seats = props.seats;
  const convenience = seats.length * 49;
  const seatType = {
    budget: 0,
    elite: 0,
  };

  seats.forEach((seat) => {
    console.log("abcd", seat.slice(0, 1));
    const row = seat.slice(0, 1);
    if (row === "K" || row === "L") {
      // setSeatType(seatType.elite+1)
      seatType.elite += 1;
    } else {
      // setSeatType(seatType.budget+1)
      seatType.budget += 1;
    }
  });
  const seatPrice = seatType.elite * 350 + seatType.budget * 250;
  const taxes = ((seatPrice + convenience) * 0.15).toFixed(2);
  const total = Number(seatPrice) + Number(convenience) + Number(taxes);
  console.log(seatType, seatPrice);

  return (
    <div className="bg-[#a5a5a5] rounded-xl flex flex-col justify-between px-5 py-4">
      <div className="flex flex-col justify-between h-full font-poppins text-black">
        <div className="text-4xl font-semibold">ORDER SUMMARY</div>
        <hr className="border-1 bg-gray-300 h-px my-4" />
        <div className="flex justify-between items-center">
          <div className="text-2xl font-medium">SELECTED SEATS :</div>
          <div className="text-2xl font-base flex items-center">
            <div className="text-base text-dimgray-200">({seats.length})</div>
            <div className="ml-1">
              (
              {seats.map((seat, index) => {
                if (index < seats.length - 1) {
                  return `${seat}, `;
                } else {
                  return `${seat}`;
                }
              })}
              )
            </div>
          </div>
        </div>
        <hr className="border-1 bg-gray-300 h-px my-4" />
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-medium">SUBTOTAL :</div>
              <div className="text-2xl font-base flex items-center">
                <div className="text-base text-dimgray-200">
                  ({seatType.budget > 0 ? `${seatType.budget}*250` : ""}
                  {seatType.budget === 0 || seatType.elite === 0 ? " " : " +  "}
                  {seatType.elite > 0 ? `${seatType.elite}*350` : ""})
                </div>
                <div className="ml-1">{seatPrice}</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-medium">CONVENIENCE FEE :</div>
              <div className="text-2xl font-base flex items-center">
                <div className="text-base text-dimgray-200">
                  (49*{props.seats.length})
                </div>
                <div className="ml-1">{convenience}</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-medium">TAXES :</div>
              <div className="text-2xl font-base flex items-center">
                <div className="text-base text-dimgray-200">(15%)</div>
                <div className="ml-1">{taxes}</div>
              </div>
            </div>
          </div>
          <hr className="border-1 bg-gray-300 h-px my-2" />
          <div className="flex font-base text-2xl justify-between">
            <div className="font-medium">ORDER TOTAL :</div>
            <div className="font-base">{total}</div>
          </div>

          <hr className="border-1 bg-gray-300 h-px my-4" />
          <div className="flex items-center justify-center">
            <button className=" my-4">
              <div className="font-semibold text-2xl w-36 rounded-md bg-[#e8e6e9] border-2 border-black">
                PLACE ORDER
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
