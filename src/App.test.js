import { render, screen } from '@testing-library/react';
import App from './App';

test('render container for calculator', () => {
  render(<App />);
  const calculatorContainer = screen.getByRole(/calculator-container/i);
  expect(calculatorContainer).toBeInTheDocument();
});
