import React from 'react';

export default function OrderSummary() {
  return (
    <div className='bg-[#a5a5a5] rounded-xl flex flex-col justify-between px-5 py-4'>
      <div className='flex flex-col justify-between h-full font-poppins text-black'>
        <div className='text-4xl font-semibold'>ORDER SUMMARY</div>
        <hr className="border-1 bg-gray-300 h-px my-4" />
        <div className='flex justify-between items-center'>
          <div className='text-2xl font-medium'>SELECTED SEATS :</div>
          <div className='text-2xl font-base flex items-center'>
            <div className='text-base text-dimgray-200'>(quantity)</div>
            <div className='ml-1'>(seats array)</div>
          </div>
        </div> 
        <hr className="border-1 bg-gray-300 h-px my-4" />
        <div className='flex flex-col justify-between flex-1'>
          <div className='flex flex-col space-y-4'>
            <div className='flex justify-between items-center'>
              <div className='text-2xl font-medium'>SUBTOTAL :</div>
              <div className='text-2xl font-base flex items-center'>
                <div className='text-base text-dimgray-200'>(199*5)</div>
                <div className='ml-1'>995</div>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='text-2xl font-medium'>CONVENIENCE FEE :</div>
              <div className='text-2xl font-base flex items-center'>
                <div className='text-base text-dimgray-200'>(49*5)</div>
                <div className='ml-1'>245</div>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='text-2xl font-medium'>TAXES :</div>
              <div className='text-2xl font-base flex items-center'>
                <div className='text-base text-dimgray-200'>(15%)</div>
                <div className='ml-1'>186</div>
              </div>
            </div>
          </div>
          <hr className="border-1 bg-gray-300 h-px my-2" />
          <div className='flex font-base text-2xl justify-between'>
            <div className='font-medium'>ORDER TOTAL :</div>
            <div className='font-base'>1426</div>
          </div>

          <hr className="border-1 bg-gray-300 h-px my-4" />
          <div className='flex items-center justify-center'>
            <button className=' my-4'>
              <div className='font-semibold text-2xl w-36 rounded-md bg-[#e8e6e9] border-2 border-black'>
                PLACE ORDER
              </div>

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
