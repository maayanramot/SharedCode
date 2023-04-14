import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './CodePageHero.css'
import CodeBlock from '../CodeBlock/CodeBlock'
import Editor from '../Editor/Editor'
import { ICode, Istore } from '../../../services/interface'

const CodePageHero: React.FC = () => {
  const [isMentor, setIsMentor] = useState(false)

  const { id } = useParams()

  const codes = useSelector((state: Istore) => state.codes.value)

  const currentCode = codes.find((code: ICode) => code._id === id)

  return (
    <div className="code-page-hero">
      <div className="card-page-headline">
        <h1>{currentCode?.title}</h1>
        {isMentor && <h2>Read only mode</h2>}
        {!isMentor && <h2>Editor</h2>}
      </div>
      <CodeBlock />
      {!isMentor && <Editor/>}
    </div>
  )
}

export default CodePageHero
