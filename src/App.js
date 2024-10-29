import React, { useRef } from 'react'

export default function App() {
  const nameRef=useRef()
  const emailRef=useRef()
  const passwordRef=useRef()
  const handleSubmit = (e)=>{
    e.preventDefault();
    const nameValue=nameRef.current.value
    const emailValue=emailRef.current.value
    const passwordValue=passwordRef.current.value

    alert("name :"+nameValue+"  email :"+emailValue+"  password :"+passwordValue)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name : <input type='text' ref={nameRef} />
        </label>
        <label>
          email : <input type='text' ref={emailRef} />
        </label>
        <label>
          password : <input type='password' ref={passwordRef}/>
        </label>
        <input type='submit'/>
      </form>
      
    </div>
  )
}
