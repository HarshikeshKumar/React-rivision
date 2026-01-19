import "./Button.css";

function Button({ text, onClickHandler }) {
  // console.log(props);
  return (
    <>
      <button onClick={onClickHandler} className="btn">
        {text}
      </button>
    </>
  );
}
export default Button;
