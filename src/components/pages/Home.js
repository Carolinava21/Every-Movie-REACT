import React, {  useState } from 'react';
import HomeMovies from './Movies/HomeMovies';
import MovieList from './Movies/Movie-list';
import DetailMovies from './Movies/DetailsMovie';
//aquí uno los componentes (Los importo y coloco de forma jerarquica)

function Home() {
  const [genres, setGenres] = useState([
    {id:"16", name: "Animation"},
    {id:"14", name:"Fantasy "},
    {id:"10402", name:"Music"},
    {id:"12", name:"Adventure"}
  ]);

  const [selectedGenre, setSelectedGenre] = useState();
  const [popularity, setPopularity] =useState([])
  const [orderedByPopularity, setOrderedByPopularity] = useState("revenue.desc");
  const [page,setPage] = useState (1)
    
 function nextPage(){
  setPage(page + 1)
 }
 function previousPage(){
  setPage(page - 1)
 }
  function resetPage(){
    setPage(1)
  } 

function handleChangeSelectedGenre(genre){
  setSelectedGenre(genre);
  resetPage()


}

  return (
    <>
    <header>Every - Movie</header>
    <HomeMovies onChangeGenre={handleChangeSelectedGenre}  genres={genres} onChangeOrder={setOrderedByPopularity}
    popularity={popularity}/>
    <MovieList  selectedGenre={selectedGenre} orderedByPopularity={orderedByPopularity} page={page} 
    nextPage={nextPage} previousPage={previousPage} /> 
     </>
  )
}

export default Home