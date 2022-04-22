import { isValidAmexCard, isValidCreditCard, isValidExpDate, isValidVisaCard } from "../cardValidation";
import { MOCK_CREDIT_CARDS } from "./mocks";

describe("cardValidation", () => {
  describe("given a card number and cvv2", () => {
    describe("can determine if isValidAmexCard", () => {
      test("based on first two digits, card number length and cvv2 length", () => {
        expect(isValidAmexCard(378282246310005, 1234)).toEqual(true);
        expect(isValidAmexCard(1123, 453463)).toEqual(false);
      });
    });

    describe("can determine if isValidVisaCard", () => {
      test("based on first digit, card number length and cvv2 length", () => {
        expect(isValidVisaCard(4111111111111111, 123)).toEqual(true);
        expect(isValidVisaCard(378282246310005, 123)).toEqual(false);
      });
    });
  });

  describe("given a card number, cvv2, and expiration date", () => {
    describe("can determine if isValidCreditCard", () => {
      test("for amex cards", () => {
        MOCK_CREDIT_CARDS.amexCards.forEach(({ cardNumber, cvv2, expDate, isValid }) => {
          expect(isValidCreditCard(cardNumber, cvv2, expDate).isValidCard).toEqual(isValid);
        });

      });
      test("for visa cards", () => {
        MOCK_CREDIT_CARDS.visaCards.forEach(({ cardNumber, cvv2, expDate, isValid }) => {
          expect(isValidCreditCard(cardNumber, cvv2, expDate).isValidCard).toEqual(isValid);
        });
      });
    });
  });

  describe("isValidExpDate", () => {
    describe("can validate given month and year to be future date", () => {
      test("as string", () => {
        expect(isValidExpDate("10", "22")).toEqual(true);
        expect(isValidExpDate("15", "01")).toEqual(false);
      });

      test("as integers", () => {
        expect(isValidExpDate(10, 22)).toEqual(true);
        expect(isValidExpDate(11, 11)).toEqual(false);
      });
    });

  });

});
