import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './components/Main';

test('renders the portfolio owner', () => {
  render(<Main />);
  expect(screen.getByRole('heading', { name: 'RinhXe' })).toBeInTheDocument();
});
