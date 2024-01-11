import React, { useEffect, useState } from 'react';
import MovieList from "../Movies/movie-list";
import { render, screen, fireEvent } from '@testing-library/react';
import { getMovies } from '../../../DataMovies/Api';
jest.mock('../../../DataMovies/Api');

beforeEach(() => {
  getMovies.mockClear();
});

describe('MovieList component', () => {
test('movieList tiene  button ',() => {
   render(<MovieList/>);
   const button = screen.getAllByRole('button', {className: 'pre'});
   expect(button.length).toBeGreaterThan(0);
 });    
});

test('movieList tiene botones de anterior y siguiente con las clases "pre" y "next"', () => {
   render(<MovieList />);
   
   const backButton = screen.getByRole('button', { name: /back/i });
   const nextButton = screen.getByRole('button', { name: /next/i });
  
   expect(backButton).toHaveClass('pre');
   expect(nextButton).toHaveClass('next');
 });
//  jest.mock('../../../DataMovies/Api', () => ({
//   getMovies: jest.fn().mockResolvedValueOnce({
//     results: [
//       { id: 1, title: 'Película 1' },
//       { id: 2, title: 'Película 2' },
//       // ... más películas para la primera página
//     ],
    
//   }).mockResolvedValueOnce({
//     results: [
//       { id: 3, title: 'Película 3' },
//       { id: 4, title: 'Película 4' },
//       // ... más películas para la segunda página
//     ],
//   }),
// }));

// test('al presionar el botón "next" se cambia de página y se actualizan los nombres de las películas', async () => {
//   render(<MovieList />);
  
//   // Esperar a que se resuelva la llamada a la API simulada con los datos de la primera página
//   await screen.findByRole('heading', { name: /Película 1/i }, {}, { timeout: 3000 });
  
//   // Obtener los nombres de las películas en la primera página
//   const nombresEnPrimeraPagina = screen.getAllByRole('heading');

//   // Obtener el botón "next"
//   const nextButton = screen.getByRole('button', { name: /next/i });

//   // Hacer clic en el botón "next"
//   fireEvent.click(nextButton);

//   // Esperar a que se resuelva la llamada a la API simulada con los datos de la segunda página
//   await screen.findByRole('heading', { name: /Película 3/i }, {}, { timeout: 3000 });

//   // Obtener los nombres de las películas en la segunda página
//   const nombresEnSegundaPagina = screen.getAllByRole('heading');

//   // Verificar que los nombres de las películas han cambiado al cambiar de página
//   expect(nombresEnSegundaPagina).not.toEqual(nombresEnPrimeraPagina);
// });
