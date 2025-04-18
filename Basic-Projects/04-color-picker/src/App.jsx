import { useState } from 'react'
import logo from './assets/logo.png'


function App() {
  const [color, setColor] = useState('#ffffff');

  const handleChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
  };


  
  return (
    <>
      <div className='min-w-screen min-h-screen flex justify-center items-center' style={{ backgroundColor: color }}>
        <div className="logo flex gap-2 items-center cursor-pointer absolute top-[2%] left-[5%]">
          <img src={logo} alt="Logo" className='w-9' />
          <h1 className='text-3xl font-bold bg-gradient-to-r from-red-400 via-green-400 to-blue-600 inline-block text-transparent bg-clip-text'>PicColor</h1>
        </div>

        <div className='border p-8 rounded-lg bg-white text-black'>
          <h2 className='text-3xl font-semibold text-center mb-5'>Pick Your Color</h2>
          <div className="color border rounded-full flex justify-center gap-3 py-1">
            <label htmlFor="color" className='text-center text-lg'>{color}</label>
            <input type="color"  id='color' value={color} onChange={handleChange} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
