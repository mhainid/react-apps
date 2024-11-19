import React, { useState } from 'react'

export const App = () => {
  const jsonArray =[
    { nom:'mhainid',
      prenom:'ayoub',
      age:'19',
      filiere:'dev'
    },
    { nom:'said',
      prenom:'bolid',
      age:'26',
      filiere:'eco'
    },
    { nom:'hassan',
      prenom:'melal',
      age:'22',
      filiere:'MEQ'
    }
  ]
  const [data,setData]=useState(jsonArray)
  const [value,setValue]=useState('');

  const search = ()=>{
    const newData=data.filter((student)=>student.prenom===value);
    setData(newData)
  }
  return (
    <div>
      <label>filiere</label><input type='text' value={value} onChange={(e)=> setValue(e.target.value)}/><br></br>
      <button onClick={()=>search()}>recherche</button>
      <table border={1}>
        <tr><th>nom</th><th>prenom</th><th>age</th><th>filiere</th></tr>
        {data && data.length &&
        data.map((student)=>{
          return <tr>
            <td>{student.nom}</td><td>{student.prenom}</td><td>{student.age}</td><td>{student.filiere}</td>
          </tr>
        })}
        
      </table>
    </div>
  )
}
