import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import DetailMovies from '../Movies/DetailsMovie';
import { getDetails } from '../../../DataMovies/ApiDetails';
import App from "../../../App";

jest.mock('../../../DataMovies/ApiDetails', () => ({
  getDetails: jest.fn(),
}));

beforeEach(() => {
  getDetails.mockClear();
});

describe('Detail Movies', () => {
  test('on Detail Movies you can see the overview of each movie', async () => {
    const movieDetailData = {
          id: 346698,
          title: 'Barbie',
          overview:
            'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
    };
    getDetails.mockResolvedValueOnce(movieDetailData);

    render(
    <MemoryRouter initialEntries={['/details/346698']}> 
    <Routes>
    <Route path="/details/:id" element={<DetailMovies />} />
    </Routes>
    </MemoryRouter>
   
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land',
          { exact: false }
        )
      ).toBeInTheDocument();
    });
  });
});
