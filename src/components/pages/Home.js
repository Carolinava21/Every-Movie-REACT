import React from 'react'
import HomeMovies from './Movies/HomeMovies'
import MovieList from './Movies/movie-list'
//aquí uno los componentes (Los importo y coloco de forma jerarquica)

function Home() {
  return (
    <>
    <h1>Every - Movie</h1>
    <HomeMovies />
    <MovieList />
     </>
  )
}

export default Home