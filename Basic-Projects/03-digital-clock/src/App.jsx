import { useEffect, useState } from 'react'
import logo from './assets/logo.jpg'


function App() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);


  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  

  return (
    <>
      <div className='min-w-screen min-h-screen bg-[url(/bg.jpg)] bg-center bg-cover flex items-center justify-center'>
        <div className="logo flex gap-2 items-center absolute top-[5%] left-[5%]">
          <img src={logo} alt="Logo" className='w-10'/>
          <h1 className='text-[#55e9fa] text-4xl font-semibold'>ClockDigi</h1>
        </div>

        <div className="w-[650px] clock-container border-3 border-[#55e9fa] px-10 py-5 rounded-lg shadow-md shadow-[#55e9fa]">
          <div className="time text-center text-[#55e9fa] text-7xl">
            {time}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
