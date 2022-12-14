import React from 'react'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import History from '../components/History'
import Prices from '../components/Prices'
import Location from '../components/Location'
import Hero from '../components/Hero'

function MainModule() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Gallery />
      <History />
      <Prices />
      <Location />

    </div>
    )
}

export default MainModule