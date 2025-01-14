import { useState,useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

// Componenet did mount
useEffect(() => {
    console.log("Counter useEffect", + count);
  }, []);

  // 2. componenet did update
  console.log("Counter rendering, count is " + count);

  useEffect(() => {
    console.log("Counter useEffect", + count);
  }, [count]);

  // 3. componenet will unmount

  useEffect(() => {
    console.log("test cleanup");

    return () => {
      console.log("Counter will unmount");
    };
  }, []);

  return (
    <>
    <p onClick={() => setCount((count) => count + 1)}>
      {count} clicks
    </p>
    </>
    
  );
}

export default Counter;

