import React, { useState, useEffect } from "react";

const MovieSeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(10); // Default ticket price

  useEffect(() => {
    // Load data from local storage if available
    const savedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (savedSeats) {
      setSelectedSeats(savedSeats);
    }
  }, []);

  useEffect(() => {
    // Save selected seats to local storage
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  const handleSeatClick = (seatIndex) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatIndex)) {
        return prevSelectedSeats.filter((seat) => seat !== seatIndex);
      } else {
        return [...prevSelectedSeats, seatIndex];
      }
    });
  };

  const renderSeats = () => {
    const totalSeats = 40; // Total number of seats
    const seats = [];

    for (let i = 0; i < totalSeats; i++) {
      const isOccupied = selectedSeats.includes(i);
      const isSelected = selectedSeats.includes(i);

      seats.push(
        <div
          key={i}
          className={`seat ${isOccupied ? "occupied" : ""} ${
            isSelected ? "selected" : ""
          }`}
          onClick={() => handleSeatClick(i)}
        ></div>
      );
    }

    return seats;
  };

  const calculateTotalPrice = () => {
    return selectedSeats.length * ticketPrice;
  };

  return (
    <div className="seat-booking">
      <div className="screen"></div>
      <div className="row">{renderSeats()}</div>
      <div className="total-price">
        Total Seats Selected: {selectedSeats.length}
        <br />
        Total Price: ${calculateTotalPrice()}
      </div>
    </div>
  );
};

export default MovieSeatBooking;
