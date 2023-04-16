import React from 'react'
import './SmilePopUp.css'

import smile from '../../../assets/icons/smile.svg'

const SmilePopUp: React.FC = () => {
  return (
    <div className="smile-popup">
      <div className="smile-content">
        <img src={smile} alt="smile icon"></img>
      </div>
    </div>
  )
}

export default SmilePopUp
