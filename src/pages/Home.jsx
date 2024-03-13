import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import endpoints from '../services/videoServices'
import { UserAuth } from '../context/AuthContext'


function Home() {

  const {user} = UserAuth()


  /** 
   *       
      
      
      
   * 
  */

  return (

    

    <>
      
      <Hero/>

      { user &&     <Row rowID='1' title='Próximas' fetchURL={endpoints.upComing}  />}

      { user &&     <Row rowID='2' title='Mejor calificadas' fetchURL={endpoints.topRated}  />}

      { user &&     <Row rowID='3' title='Populares' fetchURL={endpoints.popular}  />}

      { user &&     <Row rowID='4' title='Buen plan' fetchURL={endpoints.topRated2}  />}

      { user &&     <Row rowID='5' title='Otras que vienen' fetchURL={endpoints.soon}  />}




      
    </>
  )
};

export default Home