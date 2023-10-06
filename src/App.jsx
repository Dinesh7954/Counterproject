import { useState } from 'react';
import './App.css'

function App() {
  
   const [counter, setCounter]= useState(15);        // setCounter is callback func

   const addValue = function(){
     //setCounter(counter +1)
    //  setCounter(counter +1)            // this all will be sent in batch form beacuse same thing or  
    //  setCounter(counter +1)           // same work is repeated ,so value will be 16 not 19
                     
    setCounter(prevCounter => prevCounter +1)  // if u want then u can use prev counter
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)            // this will give 19

   }
   
   const removeValue = function(){
    setCounter(counter-1)
   }
  return (
    <>
      <h2>Click below to Add and Subtract value of counter =</h2>

      <h3>counter value is:{counter}</h3>

      <button onClick={addValue} >Add value</button> <br />

      <button onClick={removeValue}>Subtract value</button>
     
    </>
  )
}

export default App
