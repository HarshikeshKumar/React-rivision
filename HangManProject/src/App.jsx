import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button text="Click Me" onClickHandler={() => console.log("Click Me")} />
      <Button
        text="Click Me2"
        onClickHandler={() => console.log("Click Me2")}
      />
      <Button
        text="Click Me3"
        onClickHandler={() => console.log("Click Me3")}
      />
    </>
  );
}

export default App;
