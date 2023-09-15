import React, { useState, useEffect } from "react";

export default function Seats(props) {
  // console.log("seat", props.status)
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState("available");
  // if(props.status)
  useEffect(() => {
    // const containsSeat = props.status.some(obj => obj.seat === props.seatNo)
    props.status.forEach((seat) => {
      if (seat.seat === props.seatNo && seat.listed===false) {
        console.log("chec", props.seatNo);
        setStatus("unavailable");
      }
      else if(seat.seat === props.seatNo && seat.listed === true){
        setStatus("listed")
      }
    });
    // console.log("pp", props.seatNo)
    // console.log("pppp", props.status[0].seat)
  }, );
  return (
    <div>
      <div
        onClick={() => {
          // console.log("pro",props.seatNo.slice(2))
          // setIsActive(!isActive);
          // if (!isActive ) {

          // console.log("Stat", status)
          if (props.seats.length < 5 && (status === "available" || status === "listed")) {
            setIsActive(true);
            props.setSeats(props.seats.concat(props.seatNo));
          } else {
            setIsActive(false);
            props.setSeats(props.seats.filter((seat) => seat !== props.seatNo));
          }
        }}
        className={`cursor-pointer w-7 h-6 rounded-t-full ${
          isActive && status === "available" ? "bg-green-500" : status === "unavailable" ? "bg-cyan-400" : status === "listed"?"bg-orange":"bg-gray-800"
        }  m-1 text-center text-[12px] flex items-center justify-center`}
      >
        {props.seatNo.slice(2)}
      </div>
    </div>
  );
}
