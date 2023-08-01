import { useContext } from "react";
import { parentContext } from "./Parent";

const ChildA = () => {
  const {inputVal, setInputVal} = useContext(parentContext);
  return (
    <>
      <h5>Child A</h5>
      <h6>{inputVal}</h6>
    </>
  );
};

export default ChildA;