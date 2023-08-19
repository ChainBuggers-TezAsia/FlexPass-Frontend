import React, { useState } from "react";
import "../SeatSelector.css"; // Import your CSS file for styling

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-selector">
      <h2>Select Your Seats</h2>
      <div className="seat-grid">
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div className="seat-row" key={rowIndex}>
            {Array.from({ length: 8 }).map((_, seatIndex) => {
              const seatNumber = rowIndex * 8 + seatIndex + 1;
              const isSeatSelected = selectedSeats.includes(seatNumber);
              const seatClass = isSeatSelected ? "seat selected" : "seat";
              return (
                <div
                  key={seatIndex}
                  className={seatClass}
                  onClick={() => handleSeatClick(seatNumber)}
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <p className="selected-seats">
        Selected Seats: {selectedSeats.join(", ")}
      </p>
    </div>
  );
};

export default SeatSelector;
