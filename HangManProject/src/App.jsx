import "./App.css";
import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";

function App() {
  return (
    <>
      <Button
        text="Click Me"
        onClickHandler={() => console.log("Click Me")}
        styleType="success"
      />
      <Button
        text="Click Me2"
        onClickHandler={() => console.log("Click Me2")}
      />
      <Button
        text="Click Me3"
        onClickHandler={() => console.log("Click Me3")}
        styleType="error"
      />

      <TextInput
        label="Enter Some text"
        placeholder="Enter Some Text Here"
        onChangeHandler={(e) => console.log(e.target.value)}
      />
    </>
  );
}

export default App;
