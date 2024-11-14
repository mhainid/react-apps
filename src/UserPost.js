import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export const UserPost = () => {
    const [data,setData]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            setData(response.data)
            console.log(response.data);
            
            
        })
    },[])
  return (
    <div>
        <h1>list de post de l'utilisateur : {id}</h1>
        <h3>utilisateur {id}</h3>
        {
            data && data.length &&
            data.map((user)=>{
                return <div>
                    <hr></hr>
                    <p><strong>titre</strong> :{user.title}</p>
                    <p><strong>body</strong> :{user.body}</p>

                     </div>
            })
        }
    </div>
  )
}
