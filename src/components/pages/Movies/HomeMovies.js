import React, { useState } from 'react';
import './HomeMovies.css';
import { useLocation,useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { getMovies } from '../../../DataMovies/Api';
//barra de navegación(botones filter, home y order by) y header

function HomeMovies({genres, selectGenre, selectOrder}) {
  const location = useLocation();
  const navigate = useNavigate();
  //const [filteredMovies, setFilteredMovies] = useState();
  function handleGenreChange(event){
    selectGenre(event.target.value)
  }

  function handleOrderChange(event){
    selectOrder(event.target.value)
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
      <div>
      <button onClick={reHome}><a href="#inicio">Home</a></button>
        <Form.Select    
        aria-label="filterByGenreSelect"
        id="filters"
        name="category"
        onChange={handleGenreChange}
       >
        <option value="categories">FILTER BY GENRE</option>
        {genres && genres.map((genre) => (
  <option key={genre.id} value={genre.id}>
    {genre.name}
  </option>
))}
        </Form.Select>
            {/* <Form.Select href="#order by">Order - by</Form.Select> */}
        </div> 
    </nav>
  )
}

export default HomeMovies;