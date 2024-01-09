import React, { useEffect, useState } from 'react';
import './movie-list.css';
import { getMovies } from '../../../DataMovies/Api';




function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page,setPage] = useState (1)
   


  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await getMovies(page);
        setMovies(moviesData.results);
        console.log(moviesData);

      } catch (error) {
        // Manejar errores
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [page]);

 function nextPage(){
  setPage(page + 1)
 }


  return (
    <div>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id} className='cards'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}</p>
        </li>
        ))}
      </ul>
      <button onClick={nextPage} className='next'>Next</button>
    </div>
  );
}

export default MovieList;


