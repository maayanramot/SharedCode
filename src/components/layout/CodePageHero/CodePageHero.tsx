import React, { useEffect, useState } from 'react'
import { ICode, Istore } from '../../../services/interface'
import './CodePageHero.css'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import CodeBlock from '../CodeBlock/CodeBlock'

const CodePageHero: React.FC = () => {
  const [isMentor, setIsMentor] = useState(false)
  const firstVisit = localStorage.getItem('visited')

  const { id } = useParams()
  const codes = useSelector((state: Istore) => state.codes.value)
  const currentCode = codes.find((code: ICode) => code._id === id)

  useEffect(() => {
    if (firstVisit == null) {
      setIsMentor(true)
      localStorage.setItem('visited', '1')
    } else {
      setIsMentor(false)
    }
  }, [])

  return (
    <div className="code-page-hero">
      <div className="card-page-headline">
        <h1>{currentCode?.title}</h1>
        {isMentor && <h2>Read only mode</h2>}
        {!isMentor && <h2>Editor</h2>}
      </div>
      <CodeBlock editMode={isMentor}/>
    </div>
  )
}

export default CodePageHero
