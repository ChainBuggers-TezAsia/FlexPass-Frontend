
import bg from '../assets/bg.svg'
import profileImg from '../assets/profile-img.png'
// export default function UserDetails() {
//     return (
//         <div className="relative bg-gray w-full h-screen overflow-hidden text-left text-[1.5rem] text-white font-poppins">


//             <div className=" bg-gray w-[80rem] h-[10.25rem]" />
//             <img
//                 className=" rounded-[50%] w-[6.63rem] h-[6.63rem] object-cover"
//                 alt=""
//                 src={profileImg}
//             />
//             <div className=" font-semibold flex items-center w-[12.56rem] h-[2.13rem]">
//                 Elie James
//             </div>
//             <div className=" flex items-center w-[12.56rem] h-[2.13rem]">
//                 +91 9381215863
//             </div>
//         </div>
//     )
// }


import React from 'react'

export default function UserDetails() {
    return (
        <div className='bg-[#1A142F] w-full h-52 flex items-center justify-start px-28'>
            <img className='mr-5' src={profileImg} />
            <div className='flex flex-col text-semibold text-white font-poppins font-semibold justify-start items-center'>
                <div className='text-5xl'>Elie James</div>
                <div className='font-3xl'>+91 9381215863</div>
            </div>
        </div>
    )
}
