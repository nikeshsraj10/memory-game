import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Layout from './components/Layout/Layout';

test('renders App Component', () => {
  const { app } = render(<App />);
  expect(app).toBeInTheDocument();
});

test('Renders Layout', () => {
  const { layout } = render(<Layout />);
  expect(layout).toBeInTheDocument();
});
