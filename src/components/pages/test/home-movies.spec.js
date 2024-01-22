import React from "react";
import HomeMovies from "../Movies/HomeMovies";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { getMovies } from '../../../DataMovies/Api';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
jest.mock('../../../DataMovies/Api',() => ({
getMovies:jest.fn(() => Promise.resolve()
)
}));