import React from 'react'
import PaySummary from '../components/PaySummary'
import bg from '../assets/bg.svg'

export default function PaymentPage() {
    return (
        <div className='h-screen w-full flex'>
            <img className=' w-full h-screen object-cover' alt='' src={bg} />
            <div className='absolute z-10 ml-auto'>
                <PaySummary />
            </div>
        </div>
    )
}
