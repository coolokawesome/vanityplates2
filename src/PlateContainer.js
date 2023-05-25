import React, {useState, useEffect} from 'react'
import { RecoilState, useRecoilState, useRecoilValue } from 'recoil'
import { plateImage, currentPlateImage, plateText } from './atoms.js'
import './styles/PlateContainer.css'


function PlateContainer() {
const plateImageValue = useRecoilValue(plateImage)
const [currentPlate, setCurrentPlate] = useRecoilState(currentPlateImage)
const [text, setText] = useRecoilState(plateText)
const [plate, setPlate] = useState(plateImage[0])

useEffect(() => {
    setCurrentPlate(plateImageValue[0].plate)
}, [])

useEffect(() => {
    if (text.length > 7) {
        setText(text.slice(0, 7))
    }
}, [text])


return (

<>
<div className='col-12 col-lg-6'>
<div className=' plate-container'>
    <img className='plate-img img img-fluid' id='plateImg' src={currentPlate}></img>
    <p className='plate-text'>{text}</p>
</div>   
</div>
</>

)}

export default PlateContainer