import React from 'react';
import './HomeMovies.css';
//

function HomeMovies() {
  return (    
    <nav className='menu'>
      <ul>
      <li><a href="#inicio">Home</a></li>
            <li><a href="#filter by">Filter - by</a></li>
            <li><a href="#order by">Order - by</a></li>
        </ul> 
    </nav>
  )
}

export default HomeMovies;