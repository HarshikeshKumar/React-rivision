import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ handleFormSubmit, handleTextInputChange }) {
  return (
    <form onSubmit={handleFormSubmit}>
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
