import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [users , setUsers] = useState([])

  useEffect (()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((data)=>{
        setUsers(data.data)
      })
  },[])
  return (
    <div>
      {
        users.map ((user)=>{
          return <div>
            <h3>les informations de l'utilisateur</h3>
            <p>nom:{user.name}</p>
            <p>email:{user.email}</p>
            <p>ville:{user.address.city}</p>
            </div>
        })
      }
    </div>
  )
}
