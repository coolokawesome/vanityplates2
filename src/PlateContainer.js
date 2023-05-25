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


return (

<>
<div className=' plate-container col-12 col-lg-6'>
    <img className='plate-img img img-fluid' id='plateImg' src={currentPlate}></img>
    <p className='plate-text' >{text}</p>
</div>   
</>

)}

export default PlateContainer