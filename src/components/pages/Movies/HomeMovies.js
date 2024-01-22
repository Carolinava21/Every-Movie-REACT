import React, { } from 'react';
import './HomeMovies.css';
import { useLocation, } from 'react-router-dom';


function HomeMovies({genres, onChangeGenre, onChangeOrder}) {
  const location = useLocation();
  const navigate = useLocation();
  
  function handleGenreChange(event){
    console.log(event.target.value)
    onChangeGenre(event.target.value);
    }

   function handleOrderChange(event){
    onChangeOrder(event.target.value);
   }

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
      <li onClick={reHome} ><a href="#inicio">HOME</a></li>
            <li className='filterby'>
              <select 
              id="filters"
        name="category"
        onChange={handleGenreChange}
      >
        <option value="categories">GENRE</option>
        {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
      
             </select>
             </li>
                       
            <li className='order by'>
             <select
              id="order"
              name="category"
              onChange={handleOrderChange}
              >
             <option value="">ORDER - BY</option> 
             <option value={"popularity.desc"}>MOST-POPULAR</option>
            <option value={"popularity.asc"}>LESS-POPULAR</option>
            

                </select>
             </li>
        </ul> 
    </nav>
  )
}

export default HomeMovies;