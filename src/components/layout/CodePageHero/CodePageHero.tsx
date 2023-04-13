import React, { useEffect, useState } from 'react'
import './CodePageHero.css'
import CodeBlock from '../CodeBlock/CodeBlock'
import Editor from '../Editor/Editor'

const CodePageHero: React.FC = () => {
  const [isMentor, setIsMentor] = useState(false)

  useEffect(() => {
   
  }, [])

  return (
    <div className="code-page-hero">
      <div className="card-page-headline">
        <h1>Title</h1>
        {isMentor && <h2>Read only mode</h2>}
      </div>
      <CodeBlock />
      {!isMentor && <Editor/>}
    </div>
  )
}

export default CodePageHero
