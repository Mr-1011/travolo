import React from 'react'
import Navbar from './Navbar'
import Pictures from './Pictures'
import Pic from '../Data/help/Swipe-Tutorial.png'

export default function Swipe() {
  return (
    <main>
      <Navbar title={'just swipe'} desc={'just swipe right if you like what you see and left if you dont'} pic={Pic} />
      <Pictures />
    </main>
  )
}
