import React from 'react';

const Calculator = ({ calculatorVal, setCalculatorVal }) => {
  return (
    <div>
      <button onClick={() => setCalculatorVal(calculatorVal + "1")}>1</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "2")}>2</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "3")}>3</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "4")}>4</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "5")}>5</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "6")}>6</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "7")}>7</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "8")}>8</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "9")}>9</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + ",")}>,</button>
      <button onClick={() => setCalculatorVal(calculatorVal + "+")}>+</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "-")}>-</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "*")}>*</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "/")}>/</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + "(")}>(</button> 
      <button onClick={() => setCalculatorVal(calculatorVal + ")")}>)</button> 
      
      <button onClick={() => setCalculatorVal (eval(calculatorVal)) }>=</button> 
      <button onClick={() => setCalculatorVal('')}>C</button>
 
    </div>
  );
}

export default Calculator;
