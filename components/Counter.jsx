// Create components/Counter.jsx
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onClear, onIncrementByFive }) => (
  
  <div>
    <h1> Value: {value} </h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}> Clear </button>
    <button onClick={onIncrementByFive}> +5 </button>
  </div>
);

export default Counter;
