import React, { useState } from 'react'
import Expensive from './Expensive'

export default function Test() {
    const [color, setColor] = useState<string>('black');
  return (
    <>
        <button onClick={()=>{setColor(color === 'red' ? 'black' : 'red')}}>change color</button>
        <p style={{color: color}}>This is a paragraph.</p>
        <Expensive />
    </>
  )
}
