import React from 'react'
import bg from '../assets/bg.svg'
import OrderSummary from '../components/OrderSummary'

export default function PaymentPage() {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <img className=' w-full h-screen object-cover' alt='' src={bg} />
            <div className='absolute z-10 w-6/12 h-1/4 mb-72'>
                <OrderSummary />
            </div>
        </div>
    )
}
