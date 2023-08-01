import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import { createContext } from "react";
const parentContext = createContext();

const Parent = () => {
  const [inputVal, setInputVal] = useState('');

  const onTextChange = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <React.Fragment>
      <input type="text" placeholder="useContext input" value={inputVal} onChange={onTextChange} />
      <parentContext.Provider value={{ inputVal, setInputVal }}>
        <ChildA />
        <ChildB />
      </parentContext.Provider>
    </React.Fragment>
  );
};


export { parentContext };
export default Parent;