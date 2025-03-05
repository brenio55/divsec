import React, { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import './App.css'
import './css/App.css'

import WhyDivsec from './pages/admin/WhyDivsec';
import Main from './pages/main/Main';
import { LanguageProvider } from './context/LanguageContext';

export const Context = React.createContext();

function App() {
  const [test, setTest] = useState(false);

  useEffect(() => {
    // Reinicializa o AOS quando o componente é montado
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  return (
    <>
      <LanguageProvider>
        <Context.Provider value={[test, setTest]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main/>} /> 
            </Routes>
          </BrowserRouter>
        </Context.Provider>
      </LanguageProvider>
    </>
  )
}

export default App
