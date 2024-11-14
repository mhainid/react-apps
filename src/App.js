import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { UserPost } from './UserPost'

export const App = () => {
  const [users,setUsers] = useState([])

  useEffect (()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((data)=>{
      setUsers(data.data)
    })
},[])


  return (
    <div>
      <table border={1}>
        <tr><th>id</th><th>nom&prenom</th><th>username</th><th>email</th><th>postes</th></tr>
        {
          users && users.length && 
          users.map((user)=> {
            return <tr><td>{user.id}</td><td>{user.name}</td><td>{user.username}</td><td>{user.email}</td><td><Link to={`posts/${user.id}`}>detail</Link></td></tr>
          })
        }
        
      </table>
    </div>
  )
}
