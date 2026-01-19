import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submit");
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
  }

  return (
    <TextInputForm
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
    />
  );
}

export default TextInputFormContainer;
