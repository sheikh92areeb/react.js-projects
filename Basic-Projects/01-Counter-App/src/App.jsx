import { useState } from 'react'
import logo from './assets/logo-3.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container min-w-screen min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-950 to-blue-700">
        <div className="logo absolute top-[5%] left-[3%] sm:left-[10%] flex gap-3 cursor-pointer">
          <img src={logo} alt="Logo" className='w-10 h-10' />
          <h1 className='text-white text-2xl font-bold'>My Counter</h1>
        </div>
        <div className="counter-container border text-white shadow-lg shadow-gray-400 py-10 sm:py-5 px-10 rounded-lg">
          <div className="title text-center mb-5">
            <h1 className='text-xl sm:text-3xl font-bold mb-2'>Tele Counter</h1>
            <h2 className='text-xs sm:text-sm'>Welcome! to My Counter App</h2>
          </div>
          <div className="counter">
            <h3 className='count text-center text-2xl sm:text-6xl mb-5'>{count}</h3>
            <div className="buttons flex gap-4">
              <button onClick={()=> setCount(count - 1)} className='border px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-full cursor-pointer active:bg-white active:text-blue-700'>Decrement</button>
              <button onClick={()=> setCount(0)} className='border px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-full cursor-pointer active:bg-white active:text-blue-700'>Reset</button>
              <button onClick={()=> setCount(count + 1)} className='border px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-full cursor-pointer active:bg-white active:text-blue-700'>Increment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
