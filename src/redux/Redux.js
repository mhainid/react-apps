import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Redux = () => {
    const fruits = useSelector(data=>data)
    const dispatch = useDispatch()
    const [fruit,setFruit] = useState("")
  return (
    <div>
        <input type='text' value={fruit} onChange={(e)=>setFruit(e.target.value)}/>
        <button onClick={()=>dispatch({type:"add_fruit",value:fruit})}>add_fruit</button>
        
        <ul>
            {
                fruits && fruits.length ?
                fruits.map((fruit,index)=>{
                    return <div key={index}><li>{fruit}<button onClick={()=>dispatch({type:"remove_1fruit",index:index})}>X</button></li>
                    </div>
                })
                : null


            }
            
        </ul>
        <button onClick={()=>dispatch({type:"remove_fruit"})}>remove_fruit</button>

    </div>
  )
}
