import React from 'react'
import bg from '../assets/bg.svg'
import UserDetails from '../components/UserDetails'
export default function MyTicketsPage() {
    return (
        <div className='w-full h-screen bg-purple-900'>
            {/* <img src={bg} /> */}
            <UserDetails />
        </div>
    )
}
