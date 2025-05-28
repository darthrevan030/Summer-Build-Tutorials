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
        <button style={{marginTop:'20px', marginRight:'20px'}} onClick={increase}>Increment</button>
        <button style={{marginLeft:'20px'}} onClick={decrease}>Decrement</button>
        <br />
        <button style={{margin:'20px', marginLeft:'15px'}} onClick={reset}>Reset</button>
        <h1 className={`counter-${counter > 0 ? "positive" : "negative"}`}
        style={{fontSize: 12 + counter*counter}}>{counter}
        </h1>

        <div className="message">
			{counter === 0 && <p>Let's go!!!!!</p>}
			{counter > 0 && counter <= 5 && <p>Just getting started...</p>}
			{counter < 0 && <p>Wrong way!!!</p>}
		</div>
    </div>
	);
}

export default App;
