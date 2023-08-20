import profileImg from '../assets/profile-img.png'
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
