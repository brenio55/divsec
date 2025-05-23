import { useContext } from 'react'
import { Context } from '../../App'
import Header from '../../mainComponents/main/Header'
import Banner from './Banner'
import Services from './Services'
import ClientsSlider from './ClientsSlider'
import Workflow from './Workflow'
import Ratings from './Ratings'
import FAQ from './FAQ'
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
        <ClientsSlider></ClientsSlider>
        <Workflow></Workflow>
        <Ratings></Ratings>
        <FAQ></FAQ>

        <div className="flex center " style={{flexDirection: "column", gap: "0px", width: "40%", textAlign: "center", margin: "0 auto", marginTop: "50px"}} data-aos="fade-up" data-aos-duration="400">

          <p style={{
            fontSize: "14px", 
            fontWeight: "100", 
            margin: "0px", 
            background: "linear-gradient(135deg, #ffffff 0%, #b30ecf 50%,rgb(207, 153, 230) 100%)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent",
            color: "#ffffff" // Fallback color
          }}>Você sabia que ter um <span style={{fontWeight: "600"}}>bom portifólio online</span> é uma das <span style={{fontWeight: "600"}}>melhores formas</span> de aumentar as vendas e o lucro da sua empresa?</p>
          <br></br>
          <p style={{
            fontSize: "14px", 
            fontWeight: "100", 
            margin: "5px", 
            background: "linear-gradient(135deg, #ffffff 0%, #b30ecf 50%,rgb(210, 147, 237) 100%)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent",
            color: "#ffffff" // Fallback color
          }}>Então, não perca mais tempo e coloque sua <span style={{fontWeight: "600"}}>ideia em prática</span>!</p>
          <br></br>
          <h2 style={{
            fontSize: "24px", 
            fontWeight: "bold", 
            margin: "0px", 
            background: "linear-gradient(135deg, #ffffff 0%, #d442f5 30%, #b30ecf 60%,rgb(213, 147, 241) 100%)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 15px rgba(179, 14, 207, 0.3)",
            color: "#ffffff" // Fallback color
          }}>Comece agora mesmo a <span style={{fontWeight: "800"}}>melhorar os resultados</span> do seu negócio, coloque sua <span style={{fontWeight: "800"}}>ideia em prática</span> conosco</h2>
        </div>

        <div className="flex center orcamentoButton" id="orcamentoButton" data-aos="fade-up" data-aos-duration="400">
          <a href='https://wa.me/558431902145' target='_blank' rel="noopener noreferrer" data-aos="zoom-in" data-aos-duration="400">
            <button className="buttonPattern brand-gradient">
              {language === 'pt' ? 'Solicitar orçamento' : 'Request a quote'}
            </button>
          </a>
        </div>

        <Footer></Footer>
    </>
  )
}

export default Main
 