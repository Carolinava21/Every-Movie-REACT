// api.js

import { API_BASE_URL, API_KEY } from './ApiConfig';

const getMovies = async (page) => {
  const endpoint = '/discover/movie';
  const queryString = 'include_adult=false&include_video=false&language=en-US&page=' + page + '&sort_by=popularity.desc';
  const genres = {
   "genres":[
      {
         "id":28,
         "name":"Action"
      },
      {
         "id":12,
         "name":"Adventure"
      },
      {
         "id":16,
         "name":"Animation"
      },
      {
         "id":35,
         "name":"Comedy"
      },
      {
         "id":80,
         "name":"Crime"
      },
      {
         "id":99,
         "name":"Documentary"
      },
      {
         "id":18,
         "name":"Drama"
      },
      {
         "id":10751,
         "name":"Family"
      },
      {
         "id":14,
         "name":"Fantasy"
      },
      {
         "id":36,
         "name":"History"
      },
      {
         "id":27,
         "name":"Horror"
      },
      {
         "id":10402,
         "name":"Music"
      },
      {
         "id":9648,
         "name":"Mystery"
      },
      {
         "id":10749,
         "name":"Romance"
      },
      {
         "id":878,
         "name":"Science Fiction"
      },
      {
         "id":10770,
         "name":"TV Movie"
      },
      {
         "id":53,
         "name":"Thriller"
      },
      {
         "id":10752,
         "name":"War"
      },
      {
         "id":37,
         "name":"Western"
      }
   ]
}
  
  const url = `${API_BASE_URL}${endpoint}?${queryString}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching movies');
  }
};

export { getMovies };
