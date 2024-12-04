import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Redux = () => {
    const contacts = useSelector(data=>data)
    const dispatch = useDispatch()
    const villes = contacts.map(contact =>contact.ville).filter((ville,index,self) => self.indexOf(ville) === index)
    const [ville,setVille] = useState("")
    console.log(ville)
  return (
    <div className='mx-auto w-[40%] mt-10'>
        <button className='bg-green-600 text-white px-3 py-1 rounded-md'><Link to={"/add"}>add contact</Link></button>
        <div>
            <h2 className='text-xl font-semibold mb-1'>filtrer</h2><br></br>
            {villes && villes.length ?
                <select className='ml-5 px-5 rounded-sm' value={ville} onChange={(e) => setVille(e.target.value)}>
                    
                    
                    {villes.map((ville) => (
                        <option value={ville}>{ville}</option>
  )) 
                    
                }
            </select>
            :null
            }
            <button className='bg-blue-400 text-white px-3 py-1 rounded-md' onClick={()=>dispatch({type:"filtrer",ville:ville})}>filtrer par ville</button>
            <button className='bg-yellow-200 text-black px-3 py-1 rounded-md' onClick={()=>dispatch({type:"reinitialiser"})}>Renitialisation</button>

            
        </div>
        <table border={1} className='border border-black w-[100%] mt-3'>
            <tr className='bg-gray-200'><th className='text-center py-1'>id</th><th className='text-center py-1'>nom</th><th className='text-center py-1'>Email</th><th className='text-center py-1'>ville</th><th className='text-center py-1'>action</th></tr>
            
                {
                    contacts && contacts.length ?
                    contacts.map((contact,index)=>{
                        return <tr key={index}><td className='text-center py-1'>{index}</td><td className='text-center py-1'>{contact.nom}</td><td className='text-center py-1'>{contact.email}</td><td className='text-center py-1'>{contact.ville}</td><td className='text-center py-1'>
                            <div className='flex gap-2 justify-center'>
                                <button className='bg-green-600 text-white px-2 py-1 rounded-sm' ><Link to={`/edit/${index}`}>EDITER</Link></button>
                                <button className='bg-gray-500 text-white px-2 py-1 rounded-sm'><Link to={`/detail/${index}`}>DETAIL</Link></button>
                                <button className='bg-red-600 text-white px-2 py-1 rounded-sm' onClick={()=>dispatch({type:"effacer",id:parseInt(index)})}>EFFACER</button>
                            </div>
                            </td></tr>
                    })
                    :null
                }
            
        </table>
    </div>
  )
}
