import React from 'react';

const Form = (props) => {
  const increment = () => props.increment();
  const decrement = () => props.decrement();
  return (
    <div>
      <div>Counter : {props.state.counter}</div>
      <div>
        <button onClick={increment}>INC</button>
        <button onClick={decrement}>DEC</button>
      </div>
    </div>
  );
};

export default Form;
