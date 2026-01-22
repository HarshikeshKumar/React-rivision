import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");

  const navigate = useNavigate(); // useNavigate is a hook that return a navigate function

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submit", value);
    if (value) {
      // If we have something in value then we want to go to the Play page

      // setTimeout(() => {
      //   navigate("/play");
      // }, 5000);
      navigate(`/play`, { state: { wordSelected: value } });
    }
  }

  function handleTextInputChange(event) {
    // console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleShowHideClick() {
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
