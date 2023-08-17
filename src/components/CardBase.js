import React from 'react'
import MovieCard from './Movie'
export default function CardBase() {
  return (
    <div className='grid grid-cols-3'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
    </div>
  )
}
