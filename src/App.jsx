import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { CreditCardForm } from "./components";
import { isValidVisaCard, isValidExpDate, isValidAmexCard, isValidCreditCard } from "./services/cardValidation";



function App() {
  // const [formDetails, setFormDetails] = useState([]);
  // const [isValidInput, checkValidInput] = useState([]);
  // const [isFormValid, setFormValid] = useState(false);
  //
  // const handleInputChange = ({ fieldValue }) => {
  //
  // }
  //
  // useEffect(() => {
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CreditCardForm />
      </header>
    </div>
  );
}

export default App;
