import React from 'react'
import HomeMovies from './Movies/HomeMovies'
import MovieList from './Movies/movie-list'
//aquí uno los componentes (Los importo y coloco de forma jerarquica)

function Home() {
  return (
    <>
    <header>Every - Movie</header>
    <HomeMovies />
    <MovieList />
     </>
  )
}

export default Home