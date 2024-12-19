import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Redux = () => {
    const fruits = useSelector(data=>data)
    const [id,setId] = useState("")
    const [fruit,setFruit] = useState("")
    const [quantite,setQuantite] = useState("")
    const dispatch = useDispatch()
    console.log(fruits);
    
  return (
    <div>
        <div className='bg-green-400 mx-auto py-10  '>
            <h2 className='text-2xl  font-semibold text-blue-500 text-center'>Ajouter fruit</h2>
            <div className='flex justify-between mx-auto w-[60%]' >
                <div>
                    <p >id</p><input className='border border-black rounded-md px-3 py-1' type='nombre' value={id}  onChange={(e)=>setId(e.target.value)}/>
                </div>
                <div>
                    <p>fruit</p><input className='border border-black rounded-md px-3 py-1' type='text' value={fruit}  onChange={(e)=>setFruit(e.target.value)}/>
                </div>
                <div>
                    <p>quantite</p><input className='border border-black rounded-md px-3 py-1' type='nombre' value={quantite}  onChange={(e)=>setQuantite(e.target.value)}/>
                </div>
                <button  className='bg-blue-600 rounded-lg text-white px-3 py-1' onClick={()=>dispatch({type:"addfruit",id:id,fruit:fruit,quantite:quantite})}>ajouter</button>
                <button  className='bg-yellow-200 rounded-lg text-black px-3 py-1' onClick={()=>dispatch({type:"vider"})}>vider</button>
            </div>
        </div>
        <div className='mt-3 bg-green-400'>
            <table border={1} className='border border-black w-[100%] '>
                <tr className='bg-gray-200'><th className='text-center py-1' >id</th><th className='text-center py-1' >fruit</th><th className='text-center py-1' >quantite</th><th className='text-center py-1' >action</th></tr>
                {
                    fruits && fruits.length ?

                    fruits.map((fruit)=>{
                        return <tr className={`${fruit.quantite===0?"bg-red-600":null}`}><td className='text-center py-1'>{fruit.id}</td><td className='text-center py-1'>{fruit.fruit}</td><td className='text-center py-1'>{fruit.quantite}</td><td>
                            <div className='flex justify-between  mx-auto w-[20%]'>
                            <button onClick={()=>dispatch({type:"addprix",id:fruit.id})} className='bg-blue-400 text-white px-1 py-1 rounded-xl'>+</button>    
                            <button onClick={()=>dispatch({type:"moinprix",id:fruit.id,quantite:fruit.quantite})} className='bg-yellow-400 px-1 py-1 rounded-xl'>-</button>    
                            <button onClick={()=>dispatch({type:"supprimer",id:fruit.id})} className='bg-red-500 text-white px-1 py-1 rounded-xl'>X</button>    
                            </div></td></tr>
                    })
                    :null
                }
            </table>
        </div>
        
    </div>
  )
}
