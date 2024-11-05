import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Utilisateur() {
    const [users , setUsers] = useState ([])
    const [post , setPost] = useState([])

    const getdetail = (userId)=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((data)=>{
            let datafilter=data.data.filter((post)=>post.userId == userId+1)
            setPost(datafilter)
        })
    }

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((data)=>{
            setUsers(data.data)
        })
    })
  return (
    <div>
        {
            users.map((user,index)=>{
                return <div>
                    <p>{user.name}</p>
                    <button onClick={() =>getdetail(index)}>detail des articls</button>
                    <ul>
                        {post.map((post)=>{
                            return <li>{post.title}</li>
                        })}
                    </ul>
                    </div>
            })
        }
    </div>
  )
}
