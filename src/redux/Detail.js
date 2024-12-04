import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export const Detail = () => {
    const {id} = useParams()
    const data = useSelector(data => data)
    const contact = data[id]
    
  return (
    <div className='mx-auto w-[30%] mt-10'>
        <h1 className='text-5xl font-semibold mb-3'>Ajouter contact</h1>
        <div className='flex justify-between'>
          <p className='text-3xl'>id:</p><input className='border border-black rounded-sm px-3 py-1 outline-none w-[80%]' type='text' value={id} readOnly/>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-3xl'>Nom:</p><input className='border border-black rounded-sm px-3 py-1 outline-none w-[80%]' type='text' value={contact.nom} readOnly/>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-3xl'>email:</p><input className='border border-black rounded-sm px-3 py-1 outline-none w-[80%]' type='text' value={contact.email} readOnly/>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-3xl'>ville:</p><input className='border border-black rounded-sm px-3 py-1 outline-none w-[80%]' type='text' value={contact.ville} readOnly/>
        </div>
        <button  className='bg-blue-600 text-white px-3 py-1 rounded-md mt-4' ><Link to={"/"}>return</Link></button>

    </div>
  )
}
