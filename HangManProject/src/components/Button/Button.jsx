function Button({ text, onClickHandler }) {
  // console.log(props);
  return (
    <>
      <button
        onClick={onClickHandler}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        {text}
      </button>
    </>
  );
}
export default Button;
