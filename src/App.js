import React from 'react'
import UseCount from './UseCount'
import "./styl.css"

export default function App() {
  const [count ,incrementer ,decrementer]= UseCount()

  return (
    <div className='div'>
      compteur : {count}<br></br>
      <button onClick={incrementer}>incrementer</button>
      <button onClick={decrementer}>decrementer</button>

    </div>
  )
}
