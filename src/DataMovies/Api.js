import { API_BASE_URL, API_KEY } from './ApiConfig';

const getMovies = async (page,genres,popularity) => {
  const endpoint = '/discover/movie';
  const queryString = `include_adult=false&include_video=false&language=en-US&page=${page}&with_genres=${genres}&sort_by=${popularity}`;

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