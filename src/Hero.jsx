import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <div className="hero">
      <h1>Adrian Landaverde</h1>
      <h2>Data Analyst, Data Scientist, ML Engineer</h2>
    </div>
  )
}

export default Hero