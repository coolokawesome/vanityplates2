import React from 'react'
import PlateContainer from './PlateContainer'
import PlateSelector from './PlateSelector'
function Customizer() {
  return (
    <div className='container'>
        <div className='row'>
            <PlateContainer />
            <PlateSelector />
        </div>
    </div>
  )
}

export default Customizer