import { useContext, useState } from 'react'
import { Context } from '../../App'
import Header from '../../mainComponents/main/Header'
import Banner from './Banner'
import Services from './Services'
import Workflow from './Workflow'
import Ratings from './Ratings'



function Main() {

  const [test, setTest] = useContext(Context)

  return (      
    <>
        <Header></Header>
        <Banner></Banner>
        <Services></Services>
        <Workflow></Workflow>
        <Ratings></Ratings>
    </>
  )
}

export default Main
 