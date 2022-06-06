import { render, screen } from '@testing-library/react';
import JSApp from './App';

test('renders learn react link', () => {
  render(<JSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
