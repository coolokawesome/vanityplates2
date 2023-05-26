import React from 'react'
import PlateContainer from './PlateContainer'
import PlateSelector from './PlateSelector'
import Footer from './Footer'
function Customizer() {
  return (
    <div className='container'>
        <div className='row'>
            <PlateContainer />
            <PlateSelector />
            <Footer />
        </div>
    </div>
  )
}

export default Customizer