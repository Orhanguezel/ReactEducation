import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CounterBtn from "./components/CounterBtn";
import "./App.css";

function App() {
  const arr = [1, 2, 3, 4, 5];
  const [count, setCount] = useState(0);
  const [fName, setFName] = useState("Max");

  function handleNameChange() {
    setFName("Moritz");
  }

  const [NumsArr, setNumsArr] = useState(arr);

  const handleNumbers = () => {
    setNumsArr((prevArr) => [...prevArr, 6]);
  };

  const [person, setPerson] = useState({
    firstName: "Max",
    age: 25,
    city: "Berlin",
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CounterBtn count= {setCount} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p onClick={handleNameChange}>Hallo {fName} </p>
      <p>Array ist {NumsArr.join(", ")}</p>
      <button onClick={handleNumbers}>Update Array</button>
      <p>firstName: {person.firstName}</p>
      <p>age: {person.age}</p>
      <p>city: {person.city}</p>
      <button
        onClick={() =>
          setPerson((prevPerson) => ({
            ...prevPerson,
            city: "Hamburg",
          }))
        }
      >
        Update City
      </button>
    </>
  );
}

export default App;

