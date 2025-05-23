import React, { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import './App.css'
import './css/App.css'

import WhyDivsec from './pages/admin/WhyDivsec';
import Main from './pages/main/Main';
import AboutUs from './pages/main/AboutUs';
import TermsConditions from './pages/main/TermsConditions';
import PrivacyPolicy from './pages/main/PrivacyPolicy';
import FAQPage from './pages/main/FAQPage';
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
              <Route path="/about" element={<AboutUs/>} /> 
              <Route path="/terms" element={<TermsConditions/>} /> 
              <Route path="/privacy" element={<PrivacyPolicy/>} />
              <Route path="/faq" element={<FAQPage/>} />
            </Routes>
          </BrowserRouter>
        </Context.Provider>
      </LanguageProvider>
    </>
  )
}

export default App
