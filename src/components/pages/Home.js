import React from 'react'
import HomeMovies from './Movies/HomeMovies'
import MovieList from './Movies/movie-list'
//aquí uno los componentes (Los importo y coloco de forma jerarquica)

function Home() {
  const [genres, setGenres] = useState ('');
  return (
    <>
    <header>Every - Movie</header>
    <HomeMovies onChangeGenre = {setGenres} />
    <MovieList genre = {genres}/>
     </>
  )
}

export default Home