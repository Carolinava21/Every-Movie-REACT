import React, {  useState } from 'react';
import HomeMovies from './Movies/HomeMovies'
import MovieList from './Movies/Movie-list'
//aquí uno los componentes (Los importo y coloco de forma jerarquica)

function Home() {
  const [genres, setGenres] = useState ([{id: "28", name: 'Animation'}]);
  return (
    <>
    <header>Every - Movie</header>
    <HomeMovies onChangeGenre={setGenres}  genres={genres} />
    <MovieList genres={genres}/>
     </>
  )
}

export default Home