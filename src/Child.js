import { forwardRef, useImperativeHandle, useState } from "react";
import { useContext } from "react";
import { parentContext } from "./ContextAPI/Parent";

const Child = forwardRef((props, ref) => {
  const [showText, setTextVisibility] = useState(true);
  const btnClick = () => {
    setTextVisibility(!showText);
  };

  useImperativeHandle(ref, () => {
    return { btnClick };
  });

  return(
    <div>
      <h5>Child component</h5>
      {showText && <h6>Text to Play</h6>}
      <button onClick={btnClick}>Child Btn</button>
    </div>
  )
});

export default Child;