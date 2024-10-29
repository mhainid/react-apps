import React, { useEffect, useState } from 'react'

export default function App() {
  const [val,setVal] = useState ('')
  const [data,setData]=useState ([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setData(data)
    })

  },[val])
  console.log(data)
  return (
    <div>
      list de postes a partir de l'api : 
      <input type='text' onChange={(e)=>{
        setVal(e.target.value)
      }}/>
        <ul>
          {
            data.filter((item)=>item.userId==val).map((item)=>{
              return <li>{item.title}</li>
            })
          }
        </ul>

    </div>
  )
}
