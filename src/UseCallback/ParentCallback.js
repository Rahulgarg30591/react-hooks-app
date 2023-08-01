import { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

const ParentCallback = () => {
  const [counter, setCounter] = useState(0);

  const evaluatorCallback = () => {
   console.log('Hello !');
  };

  const evaluatorCallbackMemoized = useCallback(evaluatorCallback, []);

  return (
    <div>
      <h5>Parent Callback</h5>
      <ChildCallback parentFn={evaluatorCallback} message="I am not memoized" />
      <ChildCallback parentFn={evaluatorCallbackMemoized} message="I am memoized"  />
      {counter}
      <button onClick={()=>{setCounter(counter + 1)}}>Click Me!</button>
    </div>
  )
};

export default ParentCallback;