import React from 'react'
import { atom, selector } from 'recoil'
import plate1 from './imgs/plate1.png'
import plate2 from './imgs/plate2.png'
import plate3 from './imgs/plate3.png'
import plate4 from './imgs/plate4.png'
import plate5 from './imgs/plate5.png'
import plate6 from './imgs/plate6.png'
import plate7 from './imgs/plate7.png'
import plate8 from './imgs/plate8.png'
import plate9 from './imgs/plate9.png'
import plate10 from './imgs/plate10.png'
import plate11 from './imgs/plate11.png'
import plate12 from './imgs/plate12.png'
import plate13 from './imgs/plate13.png'

export const plateImage = atom({
    key: 'plateImage',
    default: [
        {
            plate: plate1,
            id: 1,
            color: 'blue'
        },
        {
            plate: plate2,
            id: 2,
            color: 'white'
        },
        {
            plate: plate3,
            id: 3,
            color: 'red'
        },
        {
            plate: plate4,
            id: 4,
            color: 'blue'
        },
        {
            plate: plate5,
            id: 5,
            color: 'black'
        },
        {
            plate: plate6,
            id: 6,
            color: 'black'
        },
        {
            plate: plate7,
            id: 7,
            color: 'blue'
        },
        {
            plate: plate8,
            id: 8,
            color: 'red'
        },
        {
            plate: plate9,
            id: 9,
            color: 'blue'
        },
        {
            plate: plate10,
            id: 10,
            color: 'black'
        },
        {
            plate: plate11,
            id: 11,
            color: 'black'
        },
        {
            plate: plate12,
            id: 12,
            color: 'green'
        },
        {
            plate: plate13,
            id: 13,
            color: 'blue'
        },
    ]
})
export const currentPlateImage = atom({
    key: 'currentPlateImage',
    default: [],
    color: []
})
export const currentPlateColor = atom({
    key: 'plateColor',
    default: 'blue'
})
export const plateText = atom({
    key: 'plateText',
    default: "yourtxt"
})