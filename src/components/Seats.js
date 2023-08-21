import React,{useState} from 'react'

export default function Seats() {

    const [isActive,setIsActive]=useState(false);

  return (
    <div>
      <div onClick={()=>{setIsActive(!isActive)}} className= {`cursor-pointer w-7 h-6 rounded-t-full ${isActive ? "bg-green-500" : "bg-gray-800"}  m-1`}></div>
    </div>
  )
}
