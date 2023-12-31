import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ResellTicket(props) {
  const navigate = useNavigate();

  const handleResale = () => {
    // navigate('/payment', { state: { status: 'resale' } });
    axios.post(`https://shiny-scarf-fawn.cyclic.app/movie/ticket/resale/${props.id}`,{})
    .then((res)=>console.log(res))
  };

  return (
    <div className="relative w-full h-40">
      <div className="flex bg-[#393d5e] rounded-lg h-35 w-1/3 p-4">
        <div className="bg-green-200 w-1/3 rounded-lg">
        <img src={props.image} alt="John Wick" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-between ml-4">
          <div>
            <p className="text-3xl font-semibold text-white">{props.movie}</p>
            <p className="text-sm text-gray-300">Monday, 16 August 2023</p>
          </div>
          <div className="flex items-center">
            <FaLocationDot className="text-[#9DA8BE] text-2xl" />
            <p className="text-[#9DA8BE] text-2xl ml-1">{props.theatre}</p>
          </div>
          <div>
            <p className="text-xl text-white">{props.seat}</p>
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
