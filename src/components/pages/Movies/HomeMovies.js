import React, { } from 'react';
import './HomeMovies.css';
import { useLocation, } from 'react-router-dom';


function HomeMovies({genres, onChangeGenre}) {
  const location = useLocation();
  const navigate = useLocation();
  
  function handleGenreChange(event){
    console.log(event.target.value)
    onChangeGenre(event.target.value)
  }

  // function handleOrderChange(event){
  //   selectOrder(event.target.value)
  // }

  function reHome (){
    if (location.pathname=== "/"){
      window.location.reload();
    }else{
      navigate("/");
    }
  };
  
  
  return (    
    <nav className='menu'>
      <ul>
      <li onClick={reHome}><a href="#inicio">Home</a></li>
            <li className='filterby'>
              <select 
              id="filters"
        name="category"
        onChange={handleGenreChange}
      >
        <option value="categories"> GENRE</option>
        {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
      
             </select>
             </li>
            
            <li><a href="#order by">Order - by</a></li>
        </ul> 
    </nav>
  )
}

export default HomeMovies;