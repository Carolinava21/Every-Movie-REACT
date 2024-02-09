import React from "react";
import MovieList from "../Movies/Movie-list";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { getMovies } from "../../../DataMovies/Api";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import App from "../../../App";

jest.mock("../../../DataMovies/Api", () => ({
  getMovies: jest.fn(),
}));


beforeEach(() => {
  getMovies.mockClear();
});

describe("MovieList component", () => {
  test("movieList tiene  button ", () => {
    render(<MovieList />);
    const button = screen.getAllByRole("button", { className: "pre" });
    expect(button.length).toBeGreaterThan(0);
  });
});

test('movieList tiene botones de anterior y siguiente con las clases "pre" y "next"', () => {
  render(<MovieList />);

  const backButton = screen.getByRole("button", { name: /back/i });
  const nextButton = screen.getByRole("button", { name: /next/i });

  expect(backButton).toHaveClass("pre");
  expect(nextButton).toHaveClass("next");
});

test("cambia el contenido de peliculas cuando se presiona el botón", async () => {
  getMovies.mockResolvedValueOnce({
    results: [
      {
        id: 1,
        title: "Wonka",
        poster_path: " ",
        release_date: " ",
      },
    ],
  });
  render(<App />);
  await waitFor(() => {
    expect(screen.getByAltText("Wonka")).toBeInTheDocument();
    screen.debug()
  });
});
