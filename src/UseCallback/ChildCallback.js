import { useEffect } from "react";

const ChildCallback = (props) => {
  useEffect(() => {
    console.log(props.message);
  }, [props.parentFn]);

  return (
    <div>
      Check Console Message to see the difference!
    </div>
  )
};

export default ChildCallback;