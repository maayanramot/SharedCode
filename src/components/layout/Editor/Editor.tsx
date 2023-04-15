import React, { useState } from 'react'
import { useEffect } from 'react'
import './Editor.css'
import * as io from 'socket.io-client'
import UserChanges from '../UserChanges/UserChanges'

const socket = io.connect('http://localhost:8000')

interface IEditor {
  currentCode: string | undefined
  compliteCode: string | undefined
  setS: (s: string) => void
}

const Editor: React.FC<IEditor> = ({ currentCode, setS, compliteCode }) => {
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')

  const sendMessage = () => {
    socket.emit('send_message', { message })
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message)
      setS(data.message)
    })
  }, [socket])

  return (
    <div className="editor-container">
      <div className="editor">
        <textarea
          defaultValue={currentCode}
          onChange={(event) => {
            setMessage(event.target.value)
          }}
        ></textarea>
        <button onClick={sendMessage}>submit</button>
      </div>
      <UserChanges userCode={messageReceived} />
    </div>
  )
}

export default Editor
