import { useContext, useState } from 'react'
import { Context } from '../../App'
import Header from '../../mainComponents/main/Header'
import Banner from './Banner'



function Main() {

  const [test, setTest] = useContext(Context)

  return (      
    <>
        <Header></Header>
        <Banner></Banner>
    </>
  )
}

export default Main
 