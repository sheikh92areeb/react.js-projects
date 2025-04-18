import { useEffect, useState } from 'react'
import logo from './assets/logo.jpg'


function App() {
  const [time, setTime] = useState(getCurrentTime(true));
  const [is12Hour, setIs12Hour] = useState(true);
  const [date, setDate] = useState(getCurrentDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime(is12Hour));
      setDate(getCurrentDate());
    }, 1000);

    return () => clearInterval(interval);
  }, [is12Hour]);


  function getCurrentTime(use12Hour) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = '';

    if (use12Hour) {
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return use12Hour
      ? `${hours}:${minutes}:${seconds} ${ampm}`
      : `${String(now.getHours()).padStart(2, '0')}:${minutes}:${seconds}`;
  }

  function getCurrentDate() {
    const now = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', year:'numeric'}
    return now.toLocaleDateString(undefined, options)
  }
  
  const toggleFormat = () => {
    setIs12Hour((prev) => !prev)
    setTime(getCurrentTime(!is12Hour))
  }

  return (
    <>
      <div className='min-w-screen min-h-screen bg-[url(/bg.jpg)] bg-center bg-cover flex items-center justify-center'>
        <div className="logo flex gap-2 items-center absolute top-[5%] left-[5%]">
          <img src={logo} alt="Logo" className='w-10'/>
          <h1 className='text-[#55e9fa] text-4xl font-semibold'>ClockDigi</h1>
        </div>

        <div className="w-[90%] sm:w-[650px] clock-container border-3 border-[#55e9fa] px-10 py-5 pt-10 rounded-lg shadow-md shadow-[#55e9fa]">
          <div className="time text-center text-[#55e9fa] text-4xl sm:text-7xl mb-10">
            {time}
          </div>
          <div className="actions flex justify-between">
          <button onClick={toggleFormat} className='border border-[#55e9fa] text-xs sm:text-lg text-[#55e9fa] px-2 sm:px-4 py-1 rounded-full cursor-pointer'>
            Switch to {is12Hour ? '24-hour' : '12-hour'}
          </button>
          <p className="date border border-[#55e9fa] text-[#55e9fa] text-xs sm:text-lg px-2 sm:px-4 py-1 rounded-full cursor-pointer">
            {date}
          </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
