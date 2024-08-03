import { useContext, useState } from 'react'
import { Context } from '../../App'
import Header from '../../mainComponents/main/Header'
import Banner from './Banner'
import Services from './Services'
import Workflow from './Workflow'
import Ratings from './Ratings'
import Footer from '../../mainComponents/main/Footer'


function Main() {

  const [test, setTest] = useContext(Context)

  return (      
    <>
        <Header></Header>
        <Banner></Banner>
        <Services></Services>
        <Workflow></Workflow>
        <Ratings></Ratings>

        <div className="flex center orcamentoButton">
          <button className="buttonPattern white">Realizar orçamento</button>
        </div>

        <Footer></Footer>
    </>
  )
}

export default Main
 