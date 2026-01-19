import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  let [inputType, setInputType] = useState("password");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submit");
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
  }

  function handleShowHideClick() {
    console.log("Show/Hide Button clicked");
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
