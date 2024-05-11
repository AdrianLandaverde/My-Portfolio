import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <div className="hero">
      <h1>ADRIAN LANDAVERDE</h1>
      <h2>DATA ANALYST | DATA SCIENTIST | AI ENGINEER</h2>
      <h3>FULL-STACK DEVELOPER</h3>
    </div>
  )
}

export default Hero