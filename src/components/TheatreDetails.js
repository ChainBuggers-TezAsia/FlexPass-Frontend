import React from 'react'
import ShowDetails from './ShowDetails'

export default function TheaterDetails() {
  return (
    <div className=' bg-blue-400 w-full h-screen'>
        <div className=' px-20 py-6  flex flex-col'>
            <div>Movie Theater</div>
            <div className=' w-full bg-purple-600 p-3 h-[70vh]'>
                <div  className=' w-full bg-gray-500 h-full'>
                    <ShowDetails/>
                    <ShowDetails/>
                </div>
            </div>

        </div>
    </div>
  )
}
