import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CreditCardForm fields', () => {
  const app = render(<App />);
  expect(app.getAllByRole('input')).toHaveLength(5);
});
