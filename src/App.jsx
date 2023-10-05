import { useState } from 'react';
import './App.css'

function App() {
  
   let [counter, setCounter]= useState(15);

   const addValue = function(){
     setCounter(counter +1)
   }
   
   const removeValue = function(){
    setCounter(counter-1)
   }
  return (
    <>
      <h2>Click below to Add and Subtract value of counter =</h2>

      <h3>counter value:{counter}</h3>

      <button onClick={addValue} >Add value</button> <br />

      <button onClick={removeValue}>Subtract value</button>
     
    </>
  )
}

export default App
