import React, { useState } from 'react'

export default function UseCount() {
    const [count,setCount]=useState(0)

    const incrementer = ()=>{
        setCount(count+1)
    }
    const decrementer = ()=>{
        setCount(count-1)
    }
  return [count ,incrementer ,decrementer]
}
