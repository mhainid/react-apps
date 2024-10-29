import {React,useState} from 'react'

export default function Change() {
    const [nombre,setNombre]=useState(0)
    const [nombre2,setNombre2]=useState(0)
    document.title=`you click ${nombre}`


  return (
    <div>
        <label>you click {nombre}</label> 
        <button onClick={()=>
            setNombre(nombre+1)
        }>increase count</button>
        <button onClick={()=>document.title="ista tiznit"}>change title</button>
    </div>
  )
}
