import React from 'react'
import UserDetails from '../components/UserDetails'
export default function UserPage() {
    return (
        <div className=' w-full relative h-screen flex'>
            {/* <div>
                <img className=' w-full h-screen object-cover' src={bg} alt='' />
                <div className='flex'>
                    <UserDetails />
                </div>
            </div> */}
            <div className='bg-[#1A142F] w-1/4 h-screen '>
                <UserDetails />
            </div>

        </div>
    )
}

