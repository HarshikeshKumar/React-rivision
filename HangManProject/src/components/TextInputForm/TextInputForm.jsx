import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm() {
  function onSubmitHandler(event) {
    event.preventDefault();
    console.log("Form Submit");
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <TextInput
          label="Enter a worrd or phrese"
          placeholder="Enter a word or phrese here..."
          onChangeHandler={handleTextInputChange}
        />
      </div>

      <div>
        <Button styleType="warning" text="Show/Hide" />
      </div>
      <div>
        <Button type="submit" styleType="primary" text="Submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
