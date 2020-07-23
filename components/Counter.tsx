import React, { useState } from 'react'

export default function Counter({ children }) {
  const [count, setCount] = useState(0)
  return (
    
    <button
      style={{
        borderRadius: '3px',
        border: '1px solid black',
        color: 'black',
        padding: '0.5em 1em',
        cursor: 'pointer',
        fontSize: '1.1em',
        width: '10rem',
      }}
      onClick={() => setCount(count + 1)}
    >
      Counter: {count}
    </button>
  )
}