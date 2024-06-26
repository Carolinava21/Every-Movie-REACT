import { useEffect, useState } from 'react';
import './DetailsMovie.css';
import { getDetails } from '../../../DataMovies/ApiDetails';
import { Card } from 'react-bootstrap';
import { useParams, useNavigate} from 'react-router-dom';
import noPicture from 'C:/Users/caroo/movie-react-challenge/src/img/noPicture.jpg';

function DetailMovies() {
  const [movieId, setMovieId] = useState(null);
  const { id } = useParams(); //conecta con el parametro estipulado en route
  const navigate = useNavigate();
  
  console.log("IDDD", id)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesDetails = await getDetails(id);
        setMovieId(moviesDetails); // Actualizar directamente con los detalles de la película
        console.log(moviesDetails);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [id]);

  function goBack() {
    navigate('/') 
  }

  if(!movieId){
    return (<p>Cargando...</p>)
  }

  return (
    <>
      <header>Every - Movie</header>
      <div>
        <button onClick={goBack}>BACK</button>
      </div>
      <Card key={movieId.id} className='details'>
        <Card.Img
          variant='top'
          src={movieId.poster_path ? `https://image.tmdb.org/t/p/w500${movieId.poster_path}` : noPicture}
        />
        </Card>
        <section>
          <h1>{movieId.title} ({movieId.release_date ? movieId.release_date.slice(0, 4) : 'N/A'})</h1>
          <div className='genres'>
          {movieId.genres?.map(genre => (
          <p key={genre.id} >{genre.name}</p>
          ))}
          </div>
          <p>{movieId.vote_average} out of 10 🤍</p>
          <p>{movieId.vote_count} votes</p>
          <p>"{movieId.overview}"</p>
          </section>    
    </>
  );
}

export default DetailMovies;