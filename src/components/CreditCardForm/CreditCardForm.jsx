import React, { useEffect, useState } from "react";
import { Button, CustomizedInput } from "../../components";
import { isValidCreditCard, isValidExpDate, isValidVisaCard, isValidVisaNumber, isValidAmexNumber, isValidAmexCard } from "../../services/cardValidation";
import "./CreditCardForm.css"

export const CreditCardForm = () => {
  const [isFormValid, setFormValid] = useState(false);
  const [cardType, setCardType] = useState(null);
  const [formValues, setFormValues] = useState({
    name: null,
    cardNumber: null,
    cvv2: null,
    expDate: {
      month: null,
      year: null,
    }
  });

  useEffect(() => {
    async function determineCardType(cardNumber) {
      if (isValidVisaNumber(cardNumber)) {
        setCardType("VISA")
      }

      if (isValidAmexNumber(cardNumber)) {
        setCardType("AMEX")
      }
    }

    if (formValues.cardNumber) {
        determineCardType(formValues.cardNumber)
    }

    async function checkForm() {
      if (formValues.name && isValidCreditCard(formValues.cardNumber, formValues.cvv2, formValues.expDate)) {
        setFormValid(true)
      }
    }

    checkForm()

  }, [formValues]);

  const determineCardType = (cardNumber) => {
    if (isValidVisaNumber(cardNumber)) {
      setCardType("VISA")
    }

    if (isValidAmexNumber(cardNumber)) {
      setCardType("AMEX")
    }
  }

  const renderSuccess = (name) => {
    return (
      <div className="Success">
        Thanks for your order, {name}!
      </div>
    )
  }

  const renderError = (message) => {
    return (
      <div id="Error">
        <span onClick={() => document.getElementById('Error').style.display('none')}>x</span>
        {message}
      </div>
    )
  }

  const submitCreditCardInfo = ({ name, cardNumber, cvv2, expDate }) => {
    // load then show success
    // load then show error

    try {
      isValidCreditCard(cardNumber, cvv2, expDate)
    } catch (err) {
      renderError(err.message)
    } finally {
      renderSuccess(name);
    }
  }

  return (
    <div className="CreditCardForm">
      <CustomizedInput
        fieldName={"name"}
        fieldType={"text"}
        labelName={"Name"}
        maxLength={30}
        onFieldChange={(e) => setFormValues({
          ...formValues,
          name: e.target.value
        })}
        pattern={"[a-zA-Z]"}
      />
      <CustomizedInput
        fieldName={"cardNumber"}
        fieldType={"number"}
        labelName={"Card Number"}
        maxLength={cardType === "VISA" ? 16 : 15}
        onFieldChange={(e) => setFormValues({
          ...formValues,
          cardNumber: e.target.value
        })}
        pattern={"[0-9]"}
      />
      <CustomizedInput
        fieldName={"cvv2"}
        fieldType={"password"}
        labelName={"CVV2"}
        maxLength={cardType === "VISA" ? 3 : 4}
        onFieldChange={(e) => setFormValues({
          ...formValues,
          cvv2: e.target.value
        })}
        pattern={"[0-9]"}
      />
    <div className="row">
      <CustomizedInput
        fieldName={"exp month"}
        fieldType={"number"}
        labelName={"Exp. Month"}
        maxLength={2}
        onFieldChange={(e) => setFormValues({
          ...formValues,
          expDate: { month: e.target.value, year: formValues.expDate.year }
        })}
        />
        <CustomizedInput
          fieldName={"exp year"}
          fieldType={"number"}
          labelName={"Exp. Year"}
          maxLength={2}
          onFieldChange={(e) => setFormValues({
            ...formValues,
            expDate: { month: formValues.expDate.month, year: e.target.value }
          })}
          />
    </div>
      <Button
        isDisabled={!isFormValid}
        handleClick={() => submitCreditCardInfo(formValues)}
      />
    </div>
  )
}
