import moment from 'moment';

export const isValidVisaNumber = (cardNumber) => {
  const asArray = cardNumber.toString().split('');

  return asArray.length === 16 && parseInt(asArray[0]) === 4
}

export const isValidVisaCard = (cardNumber, cvv2) => {
  // 4 groups of 4 numbers
  // 16 chars total
  // starts w/ 4
  // cvv2: 3 chars
  cvv2 = cvv2.toString().split('');
  return cvv2.length === 3 && isValidVisaNumber(cardNumber)
}

export const isValidAmexNumber = (cardNumber) => {
  const asArray = cardNumber.toString().split('');

  return asArray.length === 15 && parseInt(asArray.slice(0,2)) === (34||37)
}

export const isValidAmexCard = (cardNumber, cvv2) => {
  // 4-6-5 number grouping
  // 15 chars total
  // starts with '34' or '37'
  // cvv2: 4 chars
  cardNumber = cardNumber.toString().split('');
  cvv2 = cvv2.toString().split('');
  return ((parseInt(cardNumber.slice(0,2)) === 34 || 37) && cardNumber.length === 15) && cvv2.length === 4
}

export const isValidExpDate = (month, year) => {
  month = parseInt(month) - 1
  year = parseInt("20".concat(year))

  const today = moment()
  const asDate = moment(`${month}-${year}`, 'MM-YYYY')

  return asDate > today
}

export const isValidCreditCard = (cardNumber, cvv, expDate) => {
  if (!isValidVisaCard(cardNumber, cvv) && !isValidAmexCard(cardNumber, cvv)) {
    throw new CreditCardError("You did not enter valid credit card credentials")
  }

  if (!isValidExpDate(expDate.month, expDate.year)) {
    throw new CreditCardError("Invalid expiration date")
  }

  return true
}


function CreditCardError(message) {
  this.message = message;
}
