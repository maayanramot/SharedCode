import React from 'react'
import './CodeBlock.css'
import hljs from 'highlight.js'
import { useEffect } from 'react'
import { marked } from 'marked'
import 'highlight.js/styles/github.css'

const markdown = `
\`\`\`typescript
  const variable = 'hello';

  function getProfile(id: string): {
    name: string; address: string, photo: string
  } {
    return {
      name: 'ben', address: "ben's house", photo: "/ben.png"
    };
  }
\`\`\`
`

const CodeBlock: React.FC = () => {
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
