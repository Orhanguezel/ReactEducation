import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [colorA, setColorA] = useState(360);
  const [colorB, setColorB] = useState(150);
  const mainRef = useRef(null);

  // Gradient arka plan güncellemesi
  useEffect(() => {
    const a = `hsl(${colorA}, 100%, 50%)`;
    const b = `hsl(${colorB}, 100%, 50%)`;

    if (mainRef.current) {
      mainRef.current.style.background = `linear-gradient(45deg, ${a}, ${b})`;
    }
  }, [colorA, colorB]);

  const handleColor = (e) => {
    const { name, value } = e.target;
    const numericValue = Number(value); // Sayıya çevir
    if (name === "colorA") {
      setColorA(numericValue);
    } else if (name === "colorB") {
      setColorB(numericValue);
    }
  };

  const randomizeColors = () => {
    setColorA(Math.floor(Math.random() * 361));
    setColorB(Math.floor(Math.random() * 361));
  };

  return (
    <>
      <main ref={mainRef} style={{ minHeight: "100vh", padding: "20px" }}>
        <div>
          <label>Color A:</label>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            name="colorA"
            value={colorA}
            onChange={handleColor}
          />
          <input
            type="number"
            min="0"
            max="360"
            name="colorA"
            value={colorA}
            onChange={handleColor}
          />
        </div>

        <div>
          <label>Color B:</label>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            name="colorB"
            value={colorB}
            onChange={handleColor}
          />
          <input
            type="number"
            min="0"
            max="360"
            name="colorB"
            value={colorB}
            onChange={handleColor}
          />
        </div>

        <button onClick={randomizeColors}>Randomize</button>
      </main>
    </>
  );
}

export default App;
