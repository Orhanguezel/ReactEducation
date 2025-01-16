
import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(()=>{
    console.log('her zaman calisir')
  })

  useEffect(()=>{
   console.log(`ilk render edildiginde calisir`) 
  }, [])

  useEffect(()=>{
    console.log(`ilk render edildiginde ve firstName degiskeni degistiginde calisir`)
  }, [firstName])

  useEffect(()=>{
    console.log(`ilk render edildiginde ve lastName degiskeni degistiginde calisir`)
  }, [lastName])

  return (
    <div>
      <div><button onClick={()=>setFirstName("Orhan")}>Adini Degistir</button></div>
      <div><button onClick={()=>setLastName("Güzel")}>Soyadini Degistir</button></div>
    </div>
  );
}

export default App;


