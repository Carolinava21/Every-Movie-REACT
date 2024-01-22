import React from 'react';
import './DetailsMovie.css';

function DetailMovies() {


  function goBack() {
    window.location.href = '/';
  }

  return (
    <>
      <header>Every - Movie</header>
      <div>
        <button onClick={goBack}>BACK</button>
      </div>
    </>
  );
}

export default DetailMovies;
