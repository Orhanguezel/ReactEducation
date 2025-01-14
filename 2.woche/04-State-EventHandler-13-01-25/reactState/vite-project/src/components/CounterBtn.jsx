import React from 'react'

function CounterBtn(setCount) {
  return <button onClick={() => setCount((prevCount) => prevCount + 1)}>
  count is {count}
</button>
  
}

export default CounterBtn;

