function Button({ text, onClickHandler }) {
  // console.log(props);
  return (
    <>
      <button onClick={onClickHandler}>{text}</button>
    </>
  );
}
export default Button;
