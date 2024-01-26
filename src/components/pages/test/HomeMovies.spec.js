import React, { useEffect, useState } from 'react';
import MovieList from "../Movies/Movie-list";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { getMovies } from '../../../DataMovies/Api';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
