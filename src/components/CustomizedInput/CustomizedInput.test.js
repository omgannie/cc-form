import { render, waitFor, screen } from '@testing-library/react';
import { CustomizedInput } from './CustomizedInput';


test('Input component renders', async () => {
  render(<CustomizedInput
    fieldName={"exp month"}
    fieldType={"month"}
    labelName={"Exp. Month"}
    maxLength={2}
    onFieldChange={() => {}}
    />);
  await waitFor(() => screen.getByRole('input'));

  expect(screen.getByRole('input')).toBeInTheDocument();
});
