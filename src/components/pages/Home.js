import React, {  useState } from 'react';
import HomeMovies from './Movies/HomeMovies'
import MovieList from './Movies/Movie-list'
//aquí uno los componentes (Los importo y coloco de forma jerarquica)

function Home() {
  const [genres, setGenres] = useState([
    {id:"16", name: "Animation"},
    {id:"14", name:"Fantasy "},
    {id:"10402", name:"Music"},
    {id:"12", name:"Adventure"}
  ]);

  const [selectedGenre, setSelectedGenre] = useState();

  return (
    <>
    <header>Every - Movie</header>
    <HomeMovies onChangeGenre={setSelectedGenre}  genres={genres} />
    <MovieList  selectedGenre={selectedGenre}/>
     </>
  )
}

export default Home