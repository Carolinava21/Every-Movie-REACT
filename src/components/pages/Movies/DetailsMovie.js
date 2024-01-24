import {useEffect, useState} from 'react';
import './DetailsMovie.css';
import { getDetails } from '../../../DataMovies/ApiDetails'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import noPicture from 'C:/Users/caroo/movie-react-challenge/src/img/noPicture.jpg'

function DetailMovies() {
    const [movieId, setMovieId] =useState({})
    const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesDetails = await getDetails(id);
        setMovieId(moviesDetails.results);
        console.log(moviesDetails);

      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [id]);

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
        src={id.poster_path ? `https://image.tmdb.org/t/p/w500${id.poster_path}` : noPicture}
      />
      <Card.Body className="card-text">
        <Card.Title id="movie-details-title">{id.title}</Card.Title>
        <Card.Text>{id.overview}</Card.Text>
        <Card.Text>Release Year: {id.release_date}</Card.Text>
        <Card.Text>Voting average: {id.vote_average}</Card.Text>
        <Card.Text>Total votes: {id.vote_count}</Card.Text>
        <Card.Text>
          Genres: &nbsp;
          {id.genres && id.genres.map((genre, index) => {
    return `${genre.name}${index === id.genres.length - 1 ? "." : ","}  `;
})}
        
        </Card.Text>
      </Card.Body>
    </Card>
 
    </>
  );
}

export default DetailMovies;