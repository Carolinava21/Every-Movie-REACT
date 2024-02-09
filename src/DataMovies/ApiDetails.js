import { API_BASE_URL, API_KEY } from './ApiConfig';

const getDetails = async (movieId) => {
  const endpoint = `movie/${movieId}`;
  const queryString = 'language=en-US';

  const url = `${API_BASE_URL}${endpoint}?${queryString}`;

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching movie details');
  }
};

export { getDetails };