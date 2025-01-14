import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [showCounter, setShowCounter] = useState(false);

  console.log("App rendering, showCounter is " + showCounter);

  return (
    <>
      <h1>Component Lifecycle</h1>
      <button onClick={() => setShowCounter((prevState) => !prevState)}>
        Toggle Counter
      </button>
      {showCounter ? <Counter /> : <p>Counter Deleted</p>}
    </>
  );
}

export default App;


