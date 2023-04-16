import React, { useState, useEffect } from 'react';
import './Editor.css';
import * as io from 'socket.io-client';
import UserChanges from '../UserChanges/UserChanges';
import SmilePopUp from '../SmilePopUp/SmilePopUp';

const socket = io.connect('http://localhost:8000');

interface IEditor {
  currentCode: string | undefined;
  compliteCode: string | undefined;
  setS: (s: string) => void;
}

const Editor: React.FC<IEditor> = ({ currentCode, setS, compliteCode }) => {
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');
  const [data, setData] = useState('');

  const sendMessage = async () => {
    socket.emit('send_message', { message });
    const checkCode = {
      _id: '',
      title: '',
      code: message,
      missingCode: '',
    };

    try {
      const response = await fetch('http://localhost:8000/codeblocks', {
        method: 'POST',
        body: JSON.stringify(checkCode),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
      setS(data.message);
    });
  }, [socket]);

  useEffect(() => {
    // Function to set data to false after 5 seconds
    const timer = setTimeout(() => {
      setData('');
    }, 3000);

    // Clean up the timer on unmount or when data changes
    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  return (
    <div className="editor-container">
      <div className="editor">
        <textarea
          defaultValue={currentCode}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></textarea>
        <button onClick={sendMessage}>submit</button>
      </div>
      <UserChanges userCode={messageReceived} />
      {data ? <SmilePopUp /> : <></>}
    </div>
  );
};

export default Editor;
