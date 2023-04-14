import React from 'react'
import './LobyHero.css'
import CodeCard from '../CodeCard/CodeCard'

const LobyHero: React.FC = () => {
  return (
    <div className="loby-hero">
      <h1>Choose code block</h1>
      <div className="cards-container">
        <CodeCard />
      </div>
    </div>
  )
}

export default LobyHero
