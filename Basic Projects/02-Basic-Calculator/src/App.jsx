import React, { useRef, useState } from 'react'
import logo from './assets/logo.png'

function App() {
	const [input, setInput] = useState("")
	const [ans, setAns] = useState(0)

	const handleClick = (value) => {
		setInput(input + value)
	}

	const handleCalculate = () => {
		setAns(eval(input))
	}

	const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];


	return (
		<>
			<div className="main-container min-w-screen min-h-screen bg-[#000235] flex justify-center items-center">
				<div className="logo flex gap-2 items-center absolute top-[3%] left-[4%] sm:left-[6%] cursor-pointer">
					<img src={logo} alt="Logo" className='h-10' />
					<h1 className='text-[#0ff8a5] text-xl sm:text-3xl font-semibold'>My Calculator</h1>
				</div>

				<div className="calculator-container w-[90%] sm:w-[400px] border border-[#0ff8a5] text-[#0ff8a5] rounded-xl p-5 shadow-lg shadow-[#0ff8a5]">
					<div className="screen border border-[#0ff8a5] w-full mb-10 py-1 px-3 text-right rounded-lg">
						<input type="text" value={input} readOnly className="upper w-full text-right text-xl mb-2" />
						<input type="text" value={ans} readOnly className="lower w-full text-right text-5xl" />
					</div>
					<div className="buttons flex flex-wrap gap-2">
						{buttons.map((btn, i) => (
							<button onClick={() => {(btn === "=")? handleCalculate():handleClick(btn);}} key={i} className='flex-1/5 border border-[#0ff8a5] rounded-md shadow-sm py-2 shadow-[#0ff8a5] cursor-pointer'>{btn}</button>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
