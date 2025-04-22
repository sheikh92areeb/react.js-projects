import React from 'react'
import pic1 from '../assets/1.jpg'

function Slider() {
  return (
    <div className='slider-container w-[80%] h-[80%]'>
      <div className="slider bg-[rgba(255,255,255,0.4)] w-full h-full flex justify-center items-center rounded-lg relative">
        <div className="imgae-slide w-[98%] h-[96%]">
            <img src={pic1} alt="" className='w-full h-full object-cover rounded-lg' />
        </div>

        <div className="slider-buttons">
           <button className='text-[rgba(255,255,255,0.5)] text-7xl absolute left-[-5px] top-[43%]'>&lt;</button> 
        </div>        
      </div>
    </div>
  )
}

export default Slider
