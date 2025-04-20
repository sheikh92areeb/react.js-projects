import { useState } from 'react'
import Navbar from './components/Navbar'
import ImageGallery from './components/ImageGallery'

function App() {
  

  return (
    <>
      <div className='min-w-screen min-h-screen bg-gray-200'>
        <Navbar />
        <ImageGallery/>
      </div>
    </>
  )
}

export default App
