import React, { useState } from "react";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import axios from "axios";
import bg from "../assets/signup-bg.svg";
import eye from "../assets/password-eye.png";
import check from "../assets/check-mark.png";
export default function LogInPage(props) {
  const [see, setSee] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(data);
    axios({
      method: "post",
      url: "https://flexpass-back.onrender.com/user/login",
      data: { email: email, password: password.toString() },
    })
      .then(function (response) {
        localStorage.setItem("jwt_token", response.data.user.token);
        // console.log(response);
        props.setLogin(!props.login);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {" "}
      {props.login && (
        <div className="  absolute z-10 w-screen h-[85vh] flex justify-center items-center">
          <div className=" rounded-[20px] [background:linear-gradient(-38.77deg,_rgba(191,_191,_191,_0.06),_rgba(0,_0,_0,_0)),_rgba(0,_0,_0,_0.14)] shadow-[-8px_4px_5px_rgba(0,_0,_0,_0.24)] [backdrop-filter:blur(53px)] w-[30%] h-[605px] text-left text-white font-noto-sans">
            {" "}
            {/*make position absolute here*/}
            <div className="flex flex-col justify-start items-left mx-8 my-10">
              <div className=" text-21xl left-[150px] font-semibold">Login</div>
              <div className=" text-[18px] font-medium mb-4">
                Glad you’re back.!
              </div>
              <input
                className="rounded-xl text-white placeholder-white placeholder-opacity-50 text-[20px] mb-6 box-border w-full py-3 px-5 border-2 border-solid border-white bg-transparent"
                type="text"
                placeholder="Email/Phone"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="rounded-xl box-border w-full py-3 px-5 mb-2 border-2 border-solid border-white">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center text-white text-[20px] ">
                    <input
                      className="w-full bg-transparent focus:outline-none placeholder-white placeholder-opacity-50"
                      placeholder="Password"
                      type={see ? "text" : "password"}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {!see ? (
                      <PiEyeClosedBold
                        onClick={() => {
                          setSee(true);
                        }}
                      />
                    ) : (
                      <PiEyeBold
                        onClick={() => {
                          setSee(false);
                          console.log(see);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex space-x-1 items-center mb-6">
                <img src={check} />
                <div>Remember Me</div>
              </div>
              <div className=" rounded-xl [background:linear-gradient(90.57deg,#628eff,#8740cd_53.13%,#580475)] w-full py-2 mb-2">
                <div
                  className=" py-1 text-center text-5xl font-semibold cursor-pointer"
                  onClick={handleSubmit}
                >
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
              <div
                className="mt-6 text-3xl font-sans font-medium text-center cursor-pointer"
                onClick={() => {
                  props.setLogin(!props.login);
                  props.setSignup(!props.signup);
                }}
              >
                Don’t have an account ? Signup
              </div>
            </div>
          </div>
          <div
            className="absolute cursor-pointer top-10 right-20 text-white text-[32px]"
            style={{ zIndex: 3 }}
            onClick={() => {
              props.setLogin(false);
            }}
          >
            X
          </div>
        </div>
      )}
    </div>
  );
}
