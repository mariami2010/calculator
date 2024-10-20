import { useState } from "react";

function App() {
  let age = 21
  const [ userAge, setUserAge] = useState(0)
  return (
    <div className="App">
      {/* <h1> hi {userAge}</h1> */}
      <button onClick={ ()=>setUserAge(userAge+1)}> +1 </button>
      <button onClick={ ()=>setUserAge(userAge-1)}> -1 </button>
      <button onClick={ ()=>setUserAge(userAge*2)}> *2 </button>
      <button onClick={ ()=>setUserAge(userAge/2) }> /2 </button>

      <span style={{fontSize:'1.5rem'}}>{userAge}</span>

    </div>
  );
}

export default App;
