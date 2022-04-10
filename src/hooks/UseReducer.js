import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, evenNumber: state.evenNumber };
    case "evenOdd":
      if (state.count % 2 === 0){
        return {count: state.count, evenNumber: true}
      } else {
        return { count: state.count, evenNumber: false }
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, evenNumber: true });

  return (
    <section className="reducer">
      <h3>UseReducer</h3>
      <p>
        {state.count}
      </p>
      <button onClick={() => {
        dispatch({type: "increment"});
        dispatch({type: "evenOdd"});
      }} >Increment</button>
      <p> This number is:
        <br/>
        {state.evenNumber ? "Even" : "Odd"}
      </p>
    </section>
  );
};

export default UseReducer;
