import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Loby from './components/pages/Loby/Loby'
import CodePage from './components/pages/CodePage/CodePage'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loby />}></Route>
          <Route path="/code" element={<CodePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
