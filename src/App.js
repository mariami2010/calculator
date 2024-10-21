import { useState } from "react";
import Calculator from "./components/calculator/calculator";
import './App.css';

function App() {
 
  const[ calculatorVal,setCalculatorVal]= useState('')
  return (
    <div className="App">

        <div>
        <input 
        type="text" 
        value={calculatorVal} 
        readOnly 
        style={{ fontSize: '2rem', width: '300px', textAlign: 'right' }} // Optional styling
      />
        </div>

    <Calculator calculatorVal={calculatorVal} setCalculatorVal={setCalculatorVal}/>

    </div>
  );
}




export default App

