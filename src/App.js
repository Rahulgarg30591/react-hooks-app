import './App.css';
import { useCallback, useContext, useMemo, useState } from 'react';
import { useReducer } from 'react';
import { useRef } from 'react';
import Child from './Child';
import Parent from './ContextAPI/Parent';
import ParentCallback from './UseCallback/ParentCallback';

function App() {
  const initialState = {
    isDisabled: false,
    text: '',
    warningMessage: 'Please fill the form'
  };

  /* useState */
  const [counter, setCounter] = useState(0);
  const raiseCounter = () => {
    setCounter(counter + 1);
  };

  const lowCounter = () => {
    setCounter(counter - 1);
  };

   /* useReducer */
  const reducerFunction = (state, action) => {
    switch(action.type) {
      case 'CLEAR': return {
        isDisabled: false,
        text: '',
        warningMessage: 'Please fill the form'
      };

      case 'IN_PROGRESS': return {
        isDisabled: false,
        text: state.text,
        warningMessage: '',
      };

      case 'FIX': return {
        isDisabled: true,
        text: `Filled Field: ${state.text}`,
        warningMessage: '',
      };
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const clearTextField = () => {
    dispatch({ type: 'CLEAR' });
  };

  const fixTextField = () => {
    dispatch({ type: 'FIX' });
  };

  const changeStateText = (event) => {
    state.text = event.target.value;
    dispatch({ type: 'IN_PROGRESS' });
  };

  /* useRef */
  const inputRef = useRef(null);

  const clickFocus = () => {
    console.log(inputRef.current.focus());
  };

  /* useImperativeHandle */
  const childCompRef = useRef(null);

  const parentBtnClick = () => {
    childCompRef.current.btnClick();
  };

  /* useMemo */
  const [toggle, setToggle] = useState(false);
  let val = 0;

  const evaluator = () => {
    for (let index = 0; index < 100; index++) {
      for (let nestedIndex = 0; nestedIndex < 100; nestedIndex++) {
        val = val + 1;
      }
    }

    console.log(val);
    return val;
  };

  const memoBtnClick = () => {
    setToggle(!toggle);
  };

  const memoizedEvaluatedValue = useMemo(evaluator, []);

  /* useCallback */
  const [toggleCallback, setToggleCallback] = useState(false);

  const evaluatorCallback = () => {
    let valCallback = 0;
    for (let index = 0; index < 100; index++) {
      for (let nestedIndex = 0; nestedIndex < 100; nestedIndex++) {
        valCallback = valCallback + 1;
      }
    }

    console.log(valCallback);
    return valCallback;
  };

  const memoCallbackBtnClick = () => {
    setToggleCallback(!toggleCallback);
  };

  const memoizedEvaluatedFn = useCallback(evaluatorCallback, []);

  return (
    <div>
      <div>
        <h4>useState</h4>
        {counter}
        <button onClick={raiseCounter}>Increase</button>
        <button onClick={lowCounter}>Decrease</button>
      </div>
      <div>
        <h4>useReducer</h4>
        <input type="text" disabled={state.isDisabled} value={state.text} onChange={changeStateText} />
        {state.warningMessage}
        <button onClick={clearTextField}>Clear</button>
        <button onClick={fixTextField}>Fix</button>
      </div>
      <div>
        <h4>useRef</h4>
        <input type="text" ref={inputRef} placeholder='I am for useRef' />
        <button onClick={clickFocus}>Fix</button>
      </div>
      <div>
        <h4>useImperativeHandle</h4>
        <Child ref={childCompRef} />
        <button onClick={parentBtnClick}>Parent Button</button>
      </div>
      <div>
        <h4>useContext</h4>
        <Parent />
      </div>
      <div>
        <h4>useMemo</h4>
        <button onClick={memoBtnClick}>Memo Test Button</button>
        {toggle ? `TRUE ${memoizedEvaluatedValue}` : `FALSE ${memoizedEvaluatedValue}`}
      </div>
      <div>
        <h4>useCallback</h4>
        <ParentCallback />
      </div>
    </div>
  );
}

export default App;
