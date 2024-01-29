// HomeMovies.spec.js
import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';
import { getMovies } from '../../../DataMovies/Api';

jest.mock('../../../DataMovies/Api', () => ({
  getMovies: jest.fn(),
}));

beforeEach(() => {
  getMovies.mockClear();
});

describe('the filter selector allows users to choose movie genres', () => {
  test('when clicked the animation genre, it will show an animated movie', async () => {
    const animatedMovieData = {
      results: [
        {
          id: 1,
          title: 'The Boy and the Heron',
          genre_ids: [16],
        },
      ],
    };
    getMovies.mockResolvedValueOnce(animatedMovieData);
    render(
       <App />   
    );
   fireEvent.change(screen.getByTestId('filters'), { target: { value: '16' } });
   await waitFor(() => {
        expect(getMovies).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(screen.getByText('The Boy and the Heron',{exact:false})).toBeInTheDocument();
    });
  });
});
