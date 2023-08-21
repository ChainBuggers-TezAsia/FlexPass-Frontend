import React,{useState} from "react";
import screen from "../assets/screen.png";
import Seats from "../components/Seats.js";
import MovieBanner from '../components/MovieBanner';


export default function TheaterSeat() {

  return (
    <div >
    <MovieBanner/>
    
      <div className=" w-full h-44 bg-[#242333]">
      <div className='text-white capitalize font-semibold  text-[4rem] px-5'>Movie Theater</div>
      <div className='text-white capitalize font-semibold  text-[2rem] px-6'>Seats: </div>
      </div>
      <div className=" w-full h-[120vh] bg-[#242333]">
        <div className=" w-full h-full flex flex-col items-center py-10 px-16">
          <div>
            <img src={screen} alt="" />
          </div>
          <div className=" text-white text-3xl mt-10 mb-5">Screen</div>
          
          <div className=" w-full grid grid-cols-12 my-2">
          <div className=" col-span-12 flex text-white"><div>BUDGET-Rs. 150</div></div>
          <div className="w-full col-span-12 border border-gray-50"></div>
          <div className=" col-span-1 text-white">A</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white">B</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white">C</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white">D</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white">E</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white">F</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white mt-10">G</div>
            <div className=" col-span-11 w-full mt-10 grid grid-cols-4 gap-1">
                <div className=" flex justify-end mx-8 col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white">H</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex justify-end mx-8 col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white">I</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex justify-end mx-8 col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white">J</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex justify-end mx-8 col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-12 mt-10 flex text-white"><div>ELITE-Rs. 202.84</div></div>
            <div className=" w-full border col-span-12  border-gray-50"></div>
            <div className=" col-span-1 text-white">K</div>
            <div className=" col-span-11 w-full grid grid-cols-4 gap-1">
                <div className=" flex justify-end mx-8 col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" w-full flex justify-center items-center col-span-2">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
                <div className=" flex col-span-1">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                </div>
            </div>
            <div className=" col-span-1 text-white">L</div>
            <div className=" col-span-11 w-full flex mx-6">
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
                <Seats/>
            
            </div>
          </div>

          <div className=" w-full  flex flex-col justify-center items-center my-6">
            <div className=" w-full grid grid-cols-2">
                <div className=" flex justify-center items-center"><div className=' w-7 h-6 rounded-t-full bg-gray-800 m-1'></div><div className=" text-white text-3xl mx-1">Available</div></div>
                <div className=" flex justify-center items-center"><div className=' w-7 h-6 rounded-t-full bg-green-500 m-1'></div><div className=" text-white text-3xl mx-1">Selected</div></div>
            </div>
            <div className=" w-full grid grid-cols-2">
            <div className=" flex justify-center items-center"><div className=' w-7 h-6 rounded-t-full bg-orange m-1'></div><div className=" text-white text-3xl mx-1">Resell Seat</div></div>
            <div className=" flex justify-center items-center"><div className=' w-7 h-6 rounded-t-full bg-cyan-400 m-1'></div><div className=" text-white text-3xl mx-1">Booked</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
