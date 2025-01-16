import { useState, useRef } from 'react'
import './App.css'

function App() {

  const[inputTest, setInputSet]=useState('')

  const inputRef = useRef(null)

  const handelChange=(e)=>{
    console.log(e.target.value)
    setInputSet(e.target.value)
  }

  if (inputRef.current){
    console.log(inputRef.current.value)
  }

  const hundleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputRef.current.value)
  }



  return (
    <>
    <form action="" onClick={hundleSubmit}>
      <label htmlFor="">
        <input type="text"
        value={inputTest}
        onChange={handelChange} />
      </label>
      <br />

      <label htmlFor="">
        <input type="text"
        ref={inputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

    </>
  )
}

export default App
