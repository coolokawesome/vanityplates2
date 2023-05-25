import React from 'react'
import { atom, selector } from 'recoil'
import plate1 from './imgs/plate1.png'
import plate2 from './imgs/plate2.png'
import plate3 from './imgs/plate3.png'

export const plateImage = atom({
    key: 'plateImage',
    default: [
        {
            plate: plate1,
            id: 1
        },
        {
            plate: plate2,
            id: 2
        },
        {
            plate: plate3,
            id: 3
        },
    ]
})
export const currentPlateImage = atom({
    key: 'currentPlateImage',
    default: []
})
export const plateText = atom({
    key: 'plateText',
    default: "ddasdasd"
})