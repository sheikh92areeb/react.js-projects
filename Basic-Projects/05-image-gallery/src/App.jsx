import { useState } from 'react'
import logo from './assets/logo-3.png'

function App() {
  

  return (
    <>
      <div className='min-w-screen min-h-screen bg-gray-100'>
        <div className="logo absolute top-[3%] left-[5%] cursor-pointer flex gap-2 items-center">
          <img src={logo} alt="Logo" className='w-10' />
          <h1 className='text-[#f5a033] text-3xl font-bold'>Gallery</h1>
        </div>

      </div>
    </>
  )
}

export default App
