import React from 'react'
import MovieCard from './Movie'
export default function CardBase() {
  return (
    <div className='grid grid-cols-3 justify-items-center justify-center'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
    </div>
  )
}
