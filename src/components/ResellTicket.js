import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function ResellTicket() {
  const navigate = useNavigate();

  const handleResale = () => {
    navigate('/payment', { state: { status: 'resale' } });
  };

  return (
    <div className="relative w-full h-40">
      <div className="flex bg-[#393d5e] rounded-lg h-40 w-3/4 p-4">
        <div className="bg-green-200 w-1/3 rounded-lg"></div>
        <div className="flex flex-col justify-between ml-4">
          <div>
            <p className="text-3xl font-semibold text-white">Grand Turismo</p>
            <p className="text-sm text-gray-300">Monday, 16 December 2023</p>
          </div>
          <div className="flex items-center">
            <FaLocationDot className="text-[#9DA8BE] text-2xl" />
            <p className="text-[#9DA8BE] text-2xl ml-1">Theatre Name</p>
          </div>
          <button
            className="px-6 py-3 mt-2 rounded-md bg-orange text-white text-2xl font-semibold"
            onClick={handleResale}
          >
            Resale
          </button>
        </div>
      </div>
    </div>
  );
}
