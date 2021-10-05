import React, { useState } from 'react';
import './App.css';
import Button from './components/button';

const App = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div className="app">
      <div>
        <div className="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Button title={"-"} task={decrementCount} />
          <Button title={"+"} task={incrementCount} />
        </div>
      </div>
    </div>
  );
}

export default App;
