import React from 'react'
import './CodePageHero.css'
import CodeBlock from '../CodeBlock/CodeBlock'

const CodePageHero: React.FC = () => {
  return (
    <div className="code-page-hero">
      <div className="card-page-headline">
        <h1>Title</h1>
        <h2>Read only mode</h2>
        <h2>Read only mode</h2>
      </div>
      <CodeBlock />
    </div>
  )
}

export default CodePageHero
