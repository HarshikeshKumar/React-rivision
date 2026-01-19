import getButtonStyling from "./getButtonStyling.js";

function Button({ text, onClickHandler, styleType = "primary" }) {
  // console.log(props);
  return (
    <>
      <button
        onClick={onClickHandler}
        className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
