import { render, screen } from "@testing-library/react";
import { CreditCardForm } from "./CreditCardForm";

describe("CreditCardForm", () => {
  describe("renders", () => {
    beforeAll(() => {
      const form = render(<CreditCardForm />);
    });

    test("required fields", () => {
      expect(screen.getAllByRole('input')).toHaveLength(5);
    });

    test("submit button", () => {
      expect(screen.getByRole('button')).toHaveLength(1);
    });
  });
});
