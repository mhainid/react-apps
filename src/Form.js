import React, { useState } from 'react'

export default function Form() {
    const [formData,setFormData] = useState({
        nom:'',
        prenom:'',
        age:0
    })

    const handelchange=(e)=>{
        console.log(e);
        
        setFormData({...formData,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <label>nom:</label>
        <input type='text' name='nom' value={formData.nom} onChange={handelchange}/>
        <label>prenom:</label>
        <input type='text' name='prenom' value={formData.prenom} onChange={handelchange}/>
        <label>age:</label>
        <input type='text' name='age' value={formData.age} onChange={handelchange}/>
        <label>salue {formData.nom} {formData.prenom} votre age est {formData.age}</label>
    </div>
  )
}
