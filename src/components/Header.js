import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Header = (props) => {
  const navigate = useNavigate();

  return (
    <header className="relative w-full h-[5.5rem] overflow-hidden text-white font-inter">
      <div className="absolute inset-0 w-full h-[6.06rem]">
        <img
          className="absolute inset-0 w-full h-[6rem] object-cover"
          alt=""
          src="/bg-2-1@2x.png"
        />
        <div className="absolute inset-0 bg-gray-200 backdrop-blur-[7.2px] opacity-50 border border-solid border-gray-100" />
      </div>
      <button onClick={()=>{
        props.setLogin(false)
        props.setSignup(false)
        navigate('/')
      }}>
        <h1 className="absolute top-1 left-12 text-[32px] font-extrabold font-[poppins] my-4">
          FlexPass
        </h1>
      </button>
      <nav className="absolute top-9 left-72 space-x-4">
        <a className="text-white hover:text-gray-300">My Tickets</a>
        <a className="text-white hover:text-gray-300">Wallet</a>
      </nav>
      <nav className="absolute top-6 right-10 space-x-4 flex flex-row">
        <button
          className="flex justify-center items-center relative h-75 w-200 rounded-full border border-solid border-white bg-transparent"
          onClick={() => {
            // console.log("djcnw",props.checkLogin)
            props.setLogin(!props.checkLogin);
          }}
        >
          <div className="absolute inset-0 bg-opacity-0 bg-white rounded-full border border-solid border-white"></div>
          <span className="text-base font-medium text-white z-10 px-8 py-2">
            Login
          </span>
        </button>
        <button
          className="flex justify-center items-center relative h-75 w-200 rounded-full bg-[#6851FF]"
          onClick={() => {
            props.setSignup(!props.checkSignup);
          }}
        >
          <div className="absolute inset-0 bg-opacity-0 bg-white rounded-full border border-solid border-[#6851FF]"></div>
          <span className="text-base font-medium text-white z-10 px-8 py-3">
            Start now
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
