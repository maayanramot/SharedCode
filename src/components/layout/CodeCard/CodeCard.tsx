import React, { useState } from 'react'
import './CodeCard.css'
import { useNavigate } from 'react-router-dom'

const CodeCard: React.FC = () => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/code/0')
  }

  return (
    <div className="card grow" onClick={handleClick}>
      <h1>title</h1>
    </div>
  )
}

export default CodeCard
