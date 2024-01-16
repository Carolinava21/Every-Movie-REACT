import React, { useState } from 'react';
import './HomeMovies.css';
import { useLocation,useNavigate } from 'react-router-dom';
//barra de navegación(botones filter, home y order by) y header

function HomeMovies({ onChangeGenre}) {
  const location = useLocation();
  const navigate = useLocation();
  //const [filteredMovies, setFilteredMovies] = useState();
  function handleGenreChange(event){
    onChangeGenre(event.target.vaule)
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
      <ul>
      <li onClick={reHome}><a href="#inicio">Home</a></li>
            <li><select 
            //
            > </select></li>
            
            <li><a href="#order by">Order - by</a></li>
        </ul> 
    </nav>
  )
}

export default HomeMovies;