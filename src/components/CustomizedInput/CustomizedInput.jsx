import React from "react";
import "./CustomizedInput.css";

export function CustomizedInput({
  fieldName,
  fieldType="text",
  isRequired=true,
  labelName,
  maxLength,
  onFieldChange,
  placeholder,
  pattern
}) {

  return (
    <div className="Input">
      <label>{labelName}</label>
      <input
        role="input"
        type={fieldType}
        required={isRequired}
        maxLength={maxLength}
        name={fieldName}
        onChange={onFieldChange}
        pattern={pattern}
      >{placeholder}</input>
    </div>
  )
}
