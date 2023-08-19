import React, { useState, useEffect } from 'react';
import './SeatSelector.css'; // Import the CSS file for this component

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(10); // Default ticket price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updateSelectedCount();
  }, [selectedSeats]);

  // Handle seat selection
  const handleSeatClick = (e) => {
    const seatIndex = parseInt(e.target.dataset.seatIndex, 10);
    if (!isNaN(seatIndex)) {
      if (!selectedSeats.includes(seatIndex)) {
        setSelectedSeats([...selectedSeats, seatIndex]);
      } else {
        setSelectedSeats(selectedSeats.filter((index) => index !== seatIndex));
      }
    }
  };

  // Calculate and update selected seats count and total price
  const updateSelectedCount = () => {
    const selectedSeatsCount = selectedSeats.length;
    setTotalPrice(selectedSeatsCount * ticketPrice);
  };

  return (
    <div className="seat-selector">
      <h1>Select Your Seats</h1>
      <div className="container">
        {Array.from({ length: 6 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 8 }).map((_, seatIndex) => {
              const seatNumber = rowIndex * 8 + seatIndex + 1;
              const isOccupied = seatNumber === 10 || seatNumber === 25 || seatNumber === 42;
              const isSelected = selectedSeats.includes(seatNumber);
              const seatClassNames = `seat ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`;
              return (
                <div
                  className={seatClassNames}
                  key={seatIndex}
                  data-seat-index={seatNumber}
                  onClick={handleSeatClick}
                />
              );
            })}
          </div>
        ))}
        <div className="screen" />
      </div>
      <p className="text">
        You have selected <span id="count">{selectedSeats.length}</span> seats for a price of $
        <span id="total">{totalPrice}</span>
      </p>
      <div className="footer">
        <p>Seat Selector</p>
      </div>
    </div>
  );
};

export default SeatSelector;
