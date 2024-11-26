import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Redux = () => {
  const nbre=useSelector(data=>data.nbre)
  const dispatch=useDispatch();
  const [nombre,setNombre] =useState(0)
  return (
    <div>
      <p>Counter: {nbre}</p>
      <input type='nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
      <button onClick={()=>dispatch({type:"Incrementer",payload:nombre})}>Incrementer</button>
      <button onClick={()=>dispatch({type:"Decrementer",payload:nombre})}>Decrementer</button>
      <button onClick={()=>dispatch({type:"inisialiser"})}>inisialiser</button>

    </div>
  )
}
