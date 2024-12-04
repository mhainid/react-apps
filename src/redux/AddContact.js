import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export const AddContact = () => {
    const [nom,setNom] = useState("")
    const [email,setEmail] = useState("")
    const [ville,setVille] = useState("")
    const dispatch =useDispatch()

  return (
    <div className='mx-auto w-[30%] mt-10'>
        <h1 className='text-5xl font-semibold mb-3'>Ajouter contact</h1>
        <div className='flex justify-between'>
          <p className='text-3xl'>Nom:</p><input className='border border-black rounded-sm px-3 py-1 outline-none w-[80%]' type='text' value={nom} onChange={(e)=>setNom(e.target.value)}/>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-3xl'>email:</p><input className='border border-black rounded-sm px-3 py-1 outline-none w-[80%]' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-3xl'>ville:</p><input className='border border-black rounded-sm px-3 py-1 outline-none w-[80%]' type='text' value={ville} onChange={(e)=>setVille(e.target.value)}/>
        </div>
        <button  className='bg-blue-600 text-white px-3 py-1 rounded-md mt-4' onClick={()=>dispatch({type:"add",nom:nom,Email:email,ville:ville})}>Ajouter contact</button>

    </div>
  )
}
