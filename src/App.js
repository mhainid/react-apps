import React, { useState } from 'react'

export default function App() {
  const [personne , setPersonne] = useState({nom : 'ahmed', age :15})
  return (
    <div>
      <label>age: {personne.age}</label><br></br>
      <button onClick={() => 
        setPersonne({...personne,age:personne.age+1})
      }>incrementer age</button>
    </div>
  )
}
