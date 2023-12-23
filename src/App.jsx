import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import './App.css'

import WhyDivsec from './pages/admin/WhyDivsec';
import Main from './pages/main/Main';

export const Context = React.createContext();

function App() {

  const [test, setTest] = useState(false);

  return (
    <>
      <Context.Provider value={[test, setTest]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} /> 
          </Routes>
        </BrowserRouter>
        
      </Context.Provider>
    </>
  )
}

export default App
