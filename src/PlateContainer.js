import React, {useState, useEffect} from 'react'
import { RecoilState, useRecoilState, useRecoilValue } from 'recoil'
import { plateImage, currentPlateImage, currentPlateColor, plateText } from './atoms.js'
import './styles/PlateContainer.css'


function PlateContainer() {
//set the states from the atoms in atoms.js
const plateImageValue = useRecoilValue(plateImage)
const [currentPlate, setCurrentPlate] = useRecoilState(currentPlateImage)
const [text, setText] = useRecoilState(plateText)
const [currentColor, setCurrentColor] = useRecoilState(currentPlateColor)

//set the default plate from the plate array
useEffect(() => {
    setCurrentPlate(plateImageValue[0].plate)
}, [])
//handle long text
useEffect(() => {
    if (text.length > 8) {
        setText(text.slice(0, 8))
    }
}, [text])
//handle the text color on plate change 
const plateColor = () => {
switch(currentColor) {
    case 'white':
        return 'plate-text text-white'
    case 'red':
        return 'plate-text text-red'
    case 'blue':
        return 'plate-text text-blue'
    case 'black':
        return 'plate-text text-black'
    case 'green':
        return 'plate-text text-green'
    }
}

return (
<div className='col-12 col-lg-6'>
    <div className='plate-container m-3 p-2'>
        <div>
        <img className='plate-img img img-fluid' id='plateImg' src={currentPlate}></img>
        {/* {run the text change function on rerender} */}
        <p className={plateColor()}>{text}</p> 
        </div>
    </div>
    <div className='download-row'>
        <div className='d-flex justify-content-center'>
            <a className='download-img-button'><i class="fa-xl fa-solid fa-download px-3"></i>Download Image</a>
        </div>
    </div>   
</div>
)}

export default PlateContainer