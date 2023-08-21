import profileImg from '../assets/profile-img.png'
import React from 'react'

export default function UserDetails() {
    return (
        <div className='flex flex-col text-semibold text-white font-poppins font-semibold justify-start items-center'>
            {/* Header */}
            <div className='px-14 py-12 flex items-center'>
                <img className='mr-5' src={profileImg} />
                <div className='flex flex-col'>
                    <div className='text-5xl'>Elie James</div>
                    <div className='font-3xl'>+91 9381215863</div>
                </div>
            </div>
            {/* Body */}
            <div className='flex flex-col '>
                <div className='text-5xl pb-4'>Profile</div>
                <div className='text-5xl pb-4'>My Tickets</div>
                <div className='text-5xl pb-4'>Wallet</div>
            </div>
        </div>
    )
}

