import { useContext } from "react";
import { parentContext } from "./Parent";

const ChildB = () => {
  const {inputVal, setInputVal} = useContext(parentContext);
  return (
    <>
      <h5>Child B</h5>
      <h6>{inputVal}</h6>
    </>
  );
};

export default ChildB;