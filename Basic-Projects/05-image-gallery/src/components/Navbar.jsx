import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-gray-100 px-25 py-2 shadow-lg'>
        <div className="logo cursor-pointer flex gap-2 items-center">
          <img src={logo} alt="Logo" className='w-10' />
          <h1 className='text-[#f5a033] text-3xl font-bold'>Gallery</h1>
        </div>

        <ul className="nav-list flex gap-5">
            <li className="nav-item text-lg font-medium cursor-pointer hover:text-[#f5a033] hover:border-b border-[#f5a033]">Home</li>
            <li className="nav-item text-lg font-medium cursor-pointer hover:text-[#f5a033] hover:border-b border-[#f5a033]">Grid</li>
            <li className="nav-item text-lg font-medium cursor-pointer hover:text-[#f5a033] hover:border-b border-[#f5a033]">List</li>
        </ul>
    </nav>
  )
}

export default Navbar
