import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={''}></Route>
          <Route path="/code" element={''}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
