import {useEffect, useState} from 'react';
import './DetailsMovie.css';
import { getDetails } from '../../../DataMovies/ApiDetails'
import { Card } from 'react-bootstrap';

function DetailMovies() {
    const [movieDetails, setMovieDetails] =useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesDetails = await getDetails();
        setMovieDetails(moviesDetails.results);
        console.log(moviesDetails);

      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  function goBack() {
    window.location.href = '/';
  }
  return (
    <>
      <header>Every - Movie</header>
      <div>
        <button onClick={goBack}>BACK</button>
      </div>
      <Card id="movie-details">
      <Card.Img
        id="movie-details-img"
        variant="top"
        src={movieDetails.poster_path ? `http://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : ''}
      />
      <Card.Body className="card-text">
        <Card.Title id="movie-details-title">{movieDetails.title}</Card.Title>
        <Card.Text>{movieDetails.overview}</Card.Text>
        <Card.Text>Release Year: {movieDetails.release_date}</Card.Text>
        <Card.Text>Voting average: {movieDetails.vote_average}</Card.Text>
        <Card.Text>Total votes: {movieDetails.vote_count}</Card.Text>
        <Card.Text>
          Genres: &nbsp;
          {movieDetails.genres && movieDetails.genres.map((genre, index) => {
    return `${genre.name}${index === movieDetails.genres.length - 1 ? "." : ","}  `;
})}
        
        </Card.Text>
      </Card.Body>
    </Card>
 
    </>
  );
}

export default DetailMovies;