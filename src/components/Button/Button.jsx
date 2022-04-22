import React from "react";
import "./Button.css";

export function Button({ buttonText="Submit", handleClick, isDisabled }) {
  return (
    <div className="Button">
      <button
        className={isDisabled ? "disabled" : "active"}
        disabled={isDisabled}
        onClick={handleClick}>{buttonText}</button>
    </div>
  )
}
