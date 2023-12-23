import { useContext, useState } from 'react'
import Header from '../../mainComponents/admin/Header'
import { Context } from '../../App'

function WhyDivsec() {

  const [test, setTest] = useContext(Context)

  return (      
    <>
        <Header></Header>
        <div className="banner"></div>
        <button onClick={() => setTest(!test)}>Click</button>

        <h1 style={{textAlign: "center"}}>{test ? "1" : "2"}</h1>
    </>
  )
}

export default WhyDivsec
 