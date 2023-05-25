import React, {useState, useEffect} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { plateImage, currentPlateImage, plateText } from './atoms.js'

function PlateSelector() {
    const plateImageValue = useRecoilValue(plateImage)
    const [currentPlate, setCurrentPlate] = useRecoilState(currentPlateImage)
    const [text, setPlateText] = useRecoilState(plateText)
    const [plate, setPlate] = useState(plateImage[0])

    const handlePlateChange = (e) => {
    let id = e.target.value - 1
    console.log(plateImageValue[id])
    setCurrentPlate(plateImageValue[id].plate)
}
    const handlePlateText = (e) => {
    console.log(e.target.value)
    setPlateText(e.target.value)
}

  return (
    <div className='col-12 col-lg-6'>
        <input onChange={handlePlateText}></input>
        <button value={1} onClick={handlePlateChange}>ChangePlate1</button>
        <button value={2} onClick={handlePlateChange}>ChangePlate2</button>
        <button value={3} onClick={handlePlateChange}>ChangePlate3</button>
    </div>
  )
}

export default PlateSelector