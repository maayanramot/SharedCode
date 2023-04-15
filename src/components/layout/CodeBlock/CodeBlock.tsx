import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './CodeBlock.css'
import { useParams } from 'react-router-dom'
import { ICode, Istore } from '../../../services/interface'
import Editor from '../Editor/Editor'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import UserChanges from '../UserChanges/UserChanges'

interface ICodeBlock {
  editMode: boolean
}

const CodeBlock: React.FC<ICodeBlock> = ({ editMode }) => {
  const { id } = useParams()

  const codes = useSelector((state: Istore) => state.codes.value)

  const currentCode = codes.find((code: ICode) => code._id === id)

  const [codeString, setCodeString] = useState(`${currentCode?.missingCode}`)

  const [s, setS] = useState('')
  console.log(s,"s");
  

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
            <UserChanges userCode={s}/>
          </div>
        </>
      ) : (
        <>
          <div className="editor-container">
            <Editor
              currentCode={currentCode?.missingCode} setS={setS} compliteCode={currentCode?.code}
            />
          </div>
        </>
      )}
    </>
  )
}

export default CodeBlock
