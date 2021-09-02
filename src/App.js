import { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

const VERSION = 1.1;

function App() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <div class="App-border">
          <img src={logo} className="App-logo" alt="logo" />
          <div class="App-button_container">
            <button class="App-button" onClick={increment}>Increment</button>
            <button class="App-button" onClick={decrement}>Decrement</button>
          </div>
          <p className="App-link">
            {`Current value: ${counter}`}
          </p>
          <p className="App-link">
            {`Version: ${VERSION.toFixed(1)}`}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
