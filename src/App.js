import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'


import "./css.css"
export const App = () => {
  return (
    <div>
      <nav >
        <h2>ordinateur portable</h2>
        <div><Link to={'/pc1'} ><img  src='pc1.jpeg'/></Link><br></br>pc gamer 1</div>
        <div><Link to={'/pc2'} ><img  src='pc2.jpeg'/></Link><br></br>pc gamer 2</div>
        <div><Link to={'/pc3'} ><img  src='pc3.jpeg'/></Link><br></br>pc gamer 3</div>
      </nav>
      
    </div>
  )
}
