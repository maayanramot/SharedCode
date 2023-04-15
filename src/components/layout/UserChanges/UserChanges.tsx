import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface IUserChanges {
  userCode: string
}

const UserChanges: React.FC<IUserChanges> = ({ userCode }) => {
  return (
    <div className="editor-mode">
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        customStyle={{ backgroundColor: '#fff' }}
      >
        {userCode}
      </SyntaxHighlighter>
    </div>
  )
}

export default UserChanges
