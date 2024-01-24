import React, { useEffect, useState } from 'react';
import './movie-list.css';
import { getMovies } from '../../../DataMovies/Api';
import noPicture from 'C:/Users/caroo/movie-react-challenge/src/img/noPicture.jpg'
import { Link } from 'react-router-dom';

//renderizado de tarjetas y paginación



function MovieList({selectedGenre,orderedByPopularity,page,previousPage,nextPage}) {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await getMovies(page,selectedGenre,orderedByPopularity);
        setMovies(moviesData.results);
        console.log(moviesData);

      } catch (error) {
        // Manejar errores
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [page,selectedGenre,orderedByPopularity]);
  
 


  return (
    <div>
      <ul>
        {movies?.map(movie => (
        <li key={movie.id} className='cards'>
          <Link to={`/details/${movie.id}`}></Link>
          <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noPicture}
            alt={movie.title} className='pictures'/>
            
          <h3 data-testid="movie.title">{movie.title}</h3>
          <p>{movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}</p>
        </li>
        ))}
      </ul>
      <div className='pagination'>
      <button onClick={previousPage}  className='pre'disabled={page === 1}> Back</button>
      <p className='numberP'> {page}</p>
      <button onClick={nextPage}  className='next'>Next</button>
      </div>
      
    </div>
  );
}

export default MovieList;