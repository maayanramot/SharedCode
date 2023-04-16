import React, { useState } from 'react'
import { ICode, Istore } from '../../../services/interface'
import './CodeBlock.css'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import Editor from '../Editor/Editor'
import UserChanges from '../UserChanges/UserChanges'

interface ICodeBlock {
  editMode: boolean
}

const CodeBlock: React.FC<ICodeBlock> = ({ editMode }) => {
  const { id } = useParams()

  const codes = useSelector((state: Istore) => state.codes.value)
  const currentCode = codes.find((code: ICode) => code._id === id)

  const codeString = `${currentCode?.missingCode}`
  const [userText, setUserText] = useState('')

  return (
    <>
      {editMode ? (
        <>
          <div className="editor-container">
            <div className="code-block-content">
              <SyntaxHighlighter
                language="javascript"
                style={docco}
                customStyle={{ backgroundColor: '#fff' }}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
            <UserChanges userCode={userText} />
          </div>
        </>
      ) : (
        <>
          <div className="editor-container">
            <Editor
              currentCode={currentCode?.missingCode}
              setUserText={setUserText}
              compliteCode={currentCode?.code}
            />
          </div>
        </>
      )}
    </>
  )
}

export default CodeBlock
