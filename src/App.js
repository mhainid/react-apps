import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Erro } from './Erro'
import { Home } from './Home'
import { Blog } from './Blog'
export const App = () => {
  return (
    <div>
      <nav>
        <Link to={'/'}>Home </Link> 
        <Link to={'/about'}>about </Link>
        <Link to={'blog'}>Blog</Link>
      </nav>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/about' element={< About />} />
        <Route path='/blog' element={< Blog />} />
        <Route path='/*' element={< Erro />} />

      </Routes>
    </div>
  )
}
