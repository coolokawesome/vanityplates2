import React, {useState, useEffect} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { plateImage, currentPlateImage, currentPlateColor, plateText } from './atoms.js'
import './styles/plateSelector.css'

function PlateSelector() {
    const plateImageValue = useRecoilValue(plateImage)
    const [currentPlate, setCurrentPlate] = useRecoilState(currentPlateImage)
    const [currentColor, setCurrentColor] = useRecoilState(currentPlateColor)
    const [text, setPlateText] = useRecoilState(plateText)

    const handlePlateChange = (e) => {
    let id = e.target.value - 1
    console.log(plateImageValue[id])
    setCurrentPlate(plateImageValue[id].plate)
    setCurrentColor(plateImageValue[id].color)

}
    const handlePlateText = (e) => {
    console.log(e.target.value)
    setPlateText(e.target.value)
}

  return (
    <div className='col-12 col-lg-6'>
        <div className='row input-row m-3 p-2'>
          <div className='col-12'>
            <p className='text-center'>Your custom text:</p>
            <input className='plate-input' spellcheck="false" onChange={handlePlateText}></input>
          </div>
        </div>
      <div className='row radio-row m-3 p-2'>
        <p className='text-center'>Plate Selector:</p>
      <div className='row d-flex'>
        {
          plateImageValue.map(plate => (
            <div className='col-4 col-md-6 col-lg-4 col-xl-4 p-1'>
              <div className='row d-flex'>
                <div className='col-1'>
                  <input class='input-radio' type={'radio'} name='plate-select' value={`${plate.id}`} onClick={handlePlateChange}></input>
                </div>
                <div className='col-9'>
                  <img className='plate-icon img img-fluid' src={plate.plate}></img>
                </div>
              </div>
            </div>
            )
          )
        }
      </div>
        {/* <div className='col-12'>
        <button value={1} onClick={handlePlateChange}>ChangePlate1</button>
        <button value={2} onClick={handlePlateChange}>ChangePlate2</button>
        <button value={3} onClick={handlePlateChange}>ChangePlate3</button>
        <button value={4} onClick={handlePlateChange}>ChangePlate1</button>
        <button value={5} onClick={handlePlateChange}>ChangePlate2</button>
        <button value={6} onClick={handlePlateChange}>ChangePlate3</button>
        <button value={7} onClick={handlePlateChange}>ChangePlate1</button>
        <button value={8} onClick={handlePlateChange}>ChangePlate2</button>
        <button value={9} onClick={handlePlateChange}>ChangePlate3</button>
        <button value={10} onClick={handlePlateChange}>ChangePlate1</button>
        <button value={11} onClick={handlePlateChange}>ChangePlate2</button>
        <button value={12} onClick={handlePlateChange}>ChangePlate3</button>
        <button value={13} onClick={handlePlateChange}>ChangePlate3</button>
        </div> */}
      </div>
    </div>
  )
}

export default PlateSelector