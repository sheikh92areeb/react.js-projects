import { useState } from 'react'
import logo from './assets/favicon-nobg.png'
import Slider from './components/Slider'


function App() {
  

  return (
    <>
      <div className="container min-w-screen h-[100vh] bg-blue-600 flex justify-center items-center">
        <div className="logo flex gap-2 items-center absolute top-[2%] left-[4%] cursor-pointer">
          <img src={logo} alt="Logo" className='w-10' />
          <h1 className='text-2xl text-white font-medium'>ImageSlider</h1>
        </div>

        <Slider/>
      </div>
    </>
  )
}

export default App
