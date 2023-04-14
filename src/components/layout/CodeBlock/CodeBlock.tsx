import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './CodeBlock.css'
import hljs from 'highlight.js'
import { useEffect } from 'react'
import { marked } from 'marked'
import 'highlight.js/styles/github.css'
import { useParams } from 'react-router-dom'
import { ICode, Istore } from '../../../services/interface'

const CodeBlock: React.FC = () => {
  const { id } = useParams()

  const codes = useSelector((state: Istore) => state.codes.value)

  const currentCode = codes.find((code: ICode) => code._id === id)

  const markdown = `
\`\`\`typescript
  ${currentCode?.content}
\`\`\`
`

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <div className="code-block-content">
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </div>
  )
}

export default CodeBlock
