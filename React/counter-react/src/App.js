import "./App.css";
import { useState } from "react";

function App() {
  // array destructuring
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div className="App">
      <h1 className={`counter-${counter > 0 ? "positive" : "negative"}`}
        style={{fontSize: 12 + counter*counter}}>{counter}
      </h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <br />
      <button onClick={reset}>Reset</button>
      <div className="message">
        {counter === 0 && <p>Let's go!!!!!</p>}
        {counter > 0 && counter <= 5 && <p>Just getting started...</p>}
        {counter < 0 && <p>Wrong way!!!</p>}
      </div>
    </div>
  );
}

export default App;
