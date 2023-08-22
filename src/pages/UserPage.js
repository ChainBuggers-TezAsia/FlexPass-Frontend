import React from 'react'
import UserDetails from '../components/UserDetails'
import bg from '../assets/bg.svg'
import Tickets from '../components/MyTickets'
export default function UserPage() {
    return (
        <div className='h-screen w-full flex justify-start items-start'>
            <img className='w-full h-screen object-cover' alt='' src={bg} />
            <div className='w-full absolute z-10'>
                <div className='bg-[#1A142F] w-1/4 h-screen'>
                    <UserDetails />
                </div>
            </div>
            <div className='w-full absolute z-10'>
                <div className=''>
                    <Tickets />
                </div>
            </div>
        </div>
    )
}

