import { render, screen } from '@testing-library/react';
import App from './App';

test('All header renders successfully', () => {
  render(<App />);

  const element = screen.getByText(/Add To Do/i);

  expect(element).toBeInTheDocument();
});
