import React, {useState, useEffect} from 'react'
import {useRecoilState} from 'recoil'
import { plateText } from './atoms'
function PlateText() {
    const [text, setText] = useRecoilState(plateText)
  return (
    <p>{plateText.default}</p>
  )
}

export default PlateText