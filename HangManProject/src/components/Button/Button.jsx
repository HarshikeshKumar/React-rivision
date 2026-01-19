function Button({ text, onClickHandler }) {
  // console.log(props);
  return (
    <>
      <button onClick={onClickHandler} className="text-white bg-blue-500">
        {text}
      </button>
    </>
  );
}
export default Button;
