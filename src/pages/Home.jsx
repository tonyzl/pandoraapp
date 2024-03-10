import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import endpoints from '../services/videoServices'


function Home() {
  return (
    <>
      
      <Hero/>
      <Row rowID='1' title='Próximas' fetchURL={endpoints.upComing}  />
      <Row rowID='2' title='Mejor calificadas' fetchURL={endpoints.topRated}  />
      <Row rowID='3' title='Populares' fetchURL={endpoints.popular}  />
      <Row rowID='4' title='Buen plan' fetchURL={endpoints.topRated2}  />
      <Row rowID='5' title='Otras que vienen' fetchURL={endpoints.soon}  />
      
    </>
  )
};

export default Home