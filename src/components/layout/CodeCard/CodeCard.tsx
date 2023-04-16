import React from 'react'
import './CodeCard.css'

import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { ICode, Istore } from '../../../services/interface'

const CodeCard: React.FC = () => {
  const navigate = useNavigate()

  const codes = useSelector((state: Istore) => state.codes.value)  

  const handleClick = (id: string) => {
    navigate(`/code/${id}`)
  }

  const code = codes.map((code: ICode) => {
    return (
      <div
        key={code._id}
        className="card grow"
        onClick={() => handleClick(code._id)}
      >
        <h1>{code.title}</h1>
      </div>
    )
  })  
  return <>{code}</>
}

export default CodeCard
