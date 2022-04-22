import { render, waitFor, screen } from '@testing-library/react';
import { Button } from "./Button";

test('Button renders', async () => {
  render(<Button handleClick={() => {}} isDisabled={false}/>);

  await waitFor(() => screen.getByRole('button'));

  expect(screen.getByRole('button')).toBeInTheDocument();
});
