import React from 'react';
import check from "../assets/check-mark.png";
import signup from '../assets/signup-bg.svg'

export default function SignUpPage(props) {
  return (
    <div className='w-full h-screen flex'>
      <span className='absolute z-10 text-white top-10 left-10 text-[34px]' onClick={()=>{
         props.setSignup(!props.checkSignup);
      }}>&lt;--</span>
      <div className=' w-full relative h-screen '><div><img className=' w-full h-screen object-cover' src={signup} alt=''/></div></div>
      <div className=' w-3/5  absolute right-0 z-10 h-screen  ml-auto text-left text-base bg-[#5952ac] text-white font-noto-sans px-36 py-10 rounded-l-[90px]'>
        <div className='flex flex-col items-start justify-start'>
          <div className="relative font-medium">Just some details to get you in.!</div>
          <div className="relative text-[2.25rem] mb-5 font-semibold">Signup</div>
          <div className='rounded-xl text-white text-[20px] mb-6 box-border w-full py-3 px-5 border-2 border-solid border-white'>
            Username
          </div>
          <div className='rounded-xl text-white text-[20px] mb-6 box-border w-full py-3 px-5 border-2 border-solid border-white'>
            Email / Phone
          </div>
          <div className='rounded-xl text-white text-[20px] mb-6 box-border w-full py-3 px-5 border-2 border-solid border-white'>
            Password
          </div>
          <div className='rounded-xl text-white text-[20px] mb-6 box-border w-full py-3 px-5 border-2 border-solid border-white'>
            Confirm Password
          </div>
          <div className="flex space-x-1 items-center mb-6">
            <img src={check} />
            <div>Remember Me</div>
          </div>
          <div className=" rounded-xl [background:linear-gradient(90.57deg,#628eff,#8740cd_53.13%,#580475)] w-full py-2 mb-2">
            <div className=" py-1 text-center text-5xl font-semibold">
              Sign Up
            </div>
          </div>
          <div className="mt-6 text-3xl font-sans font-medium text-center mx-auto">
            Already Registered? Login
          </div>
          <div className='flex mx-auto'>
            <div className="mt-6 text-3xl mr-5  font-sans font-medium text-center">
              Terms & Conditions
            </div>
            <div className="mt-6 text-3xl mr-5 font-sans font-medium text-center">
              Support
            </div>
            <div className="mt-6 text-3xl mr-5 font-sans font-medium text-center">
              Customer Care
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
