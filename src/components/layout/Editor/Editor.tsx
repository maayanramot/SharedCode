import React, { useState } from 'react'
import { useEffect } from 'react'
import './Editor.css'
import * as io from 'socket.io-client'
const socket = io.connect('http://localhost:8000')

const Editor: React.FC = () => {
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')

  const sendMessage = () => {
    socket.emit('send_message', { message })
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message)
    })
  }, [socket])

  return (
    <div className="editor">
      <textarea
        placeholder="Edit your code here"
        onChange={(event) => {
          console.log(event.target.value)
        }}
      ></textarea>
      <button onClick={sendMessage}>submit</button>
      {messageReceived}
    </div>
  )
}

export default Editor
