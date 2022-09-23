import React from 'react'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import History from '../components/History'
import Prices from '../components/Prices'
import Location from '../components/Location'

function MainModule() {
  return (
    <div class="bg-mainBg bg-repeat-y bg-cover">
    <Services />
    <Gallery />
    <History />
    <Prices />
    <Location />

    </div>
    )
}

export default MainModule