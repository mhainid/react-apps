import React, { useState } from 'react'

export default function Compteur() {
    const [compteur,setcomptur]=useState(0);

    const incrementer= () =>{
        setcomptur(compteur+1)
    }
    const decrementer= () =>{
        setcomptur(compteur-1)
    }
    const initialiser= () =>{
        setcomptur(0)
    }
  return (
    <div className='app'>
          <h3>comppteur {compteur}</h3>
          <button onClick={incrementer}>incrementer</button>
          <button onClick={decrementer} disabled={compteur==0}>decrementer</button>
          <button onClick={initialiser}>initialiser a 0</button>
      </div>
  )
}
