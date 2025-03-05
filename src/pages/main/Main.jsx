import { useContext, useState } from 'react'
import { Context } from '../../App'
import Header from '../../mainComponents/main/Header'
import Banner from './Banner'
import Services from './Services'
import Workflow from './Workflow'
import Ratings from './Ratings'
import Footer from '../../mainComponents/main/Footer'
import { useLanguage } from '../../context/LanguageContext'


function Main() {
  const [test, setTest] = useContext(Context)
  const { t, language } = useLanguage();

  return (      
    <>
        <Header></Header>
        <Banner></Banner>
        <Services></Services>
        <Workflow></Workflow>
        <Ratings></Ratings>

        <div className="flex center orcamentoButton" id="orcamentoButton" data-aos="fade-up" data-aos-duration="400">
          <a href='https://wa.me/558431902145' target='_blank' data-aos="zoom-in" data-aos-duration="400">
            <button className="buttonPattern white">
              {language === 'pt' ? 'Realizar orçamento' : 'Get a quote'}
            </button>
          </a>
        </div>

        <Footer></Footer>
    </>
  )
}

export default Main
 