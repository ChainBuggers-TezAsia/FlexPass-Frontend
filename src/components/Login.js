import React from "react";
import bg from "../assets/signup-bg.svg";
import eye from "../assets/password-eye.png";
import check from "../assets/check-mark.png";
export default function LogInPage(props) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img src={bg} style={{ zIndex: 0, width: "100vw" }} />
      <div className="absolute rounded-[20px] [background:linear-gradient(-38.77deg,_rgba(191,_191,_191,_0.06),_rgba(0,_0,_0,_0)),_rgba(0,_0,_0,_0.14)] shadow-[-8px_4px_5px_rgba(0,_0,_0,_0.24)] [backdrop-filter:blur(53px)] w-[30%] h-[605px] text-left text-white font-noto-sans">
        {" "}
        {/*make position absolute here*/}
        <div className="flex flex-col justify-start items-left mx-8 my-10">
          <div className=" text-21xl left-[150px] font-semibold">Login</div>
          <div className=" text-[18px] font-medium mb-4">
            Glad you’re back.!
          </div>
          <imput className="rounded-xl text-white text-[20px] mb-6 box-border w-full py-3 px-5 border-2 border-solid border-white" >
            Username
          </imput>
          <div className="rounded-xl box-border w-full py-3 px-5 mb-2 border-2 border-solid border-white">
            <div className="flex flex-col">
              <div className="flex justify-between items-center text-white text-[20px]">
                <div>Password</div>
                <img src={eye} />
              </div>
            </div>
          </div>
          <div className="flex space-x-1 items-center mb-6">
            <img src={check} />
            <div>Remember Me</div>
          </div>
          <div className=" rounded-xl [background:linear-gradient(90.57deg,#628eff,#8740cd_53.13%,#580475)] w-full py-2 mb-2">
            <div className=" py-1 text-center text-5xl font-semibold">
              Login
            </div>
          </div>
          <div className="text-center text-base font-medium mb-5">
            Forgot password ?
          </div>
          <div className="flex justify-center items-center mb-3">
            <div className="border-t border-dimgray-100 flex-grow mx-4"></div>
            <p className="text-base font-base text-dimgray-100 mx-2">OR</p>
            <div className="border-t border-dimgray-100 flex-grow mx-4"></div>
          </div>
          <div className="mt-2 flex justify-center items-center text-dimgray-200">
            <div className="w-8 h-6">+91</div>
            <div className="w-56 h-6 border-b-2 border-dimgray-300">
              Continue with mobile number
            </div>
          </div>
          <div className="mt-6 text-3xl font-sans font-medium text-center">
            Don’t have an account ? Signup
          </div>
        </div>
      </div>
      <div
        className="absolute top-10 right-20 text-white text-[32px]"
        style={{ zIndex: 3 }}
        onClick={() => {
          props.setLogin(!props.checkLogin);
        }}
      >
        X
      </div>
    </div>
  );
}
