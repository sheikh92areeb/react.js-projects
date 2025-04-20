import React, { useState } from 'react'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

function ImageGallery() {
	const [grid, setGrid] = useState(true)

	const switchGrid = () => {
		setGrid(!grid)
	}

	return (
		<div className='container min-w-screen px-25 py-10'>
			<div className='w-full bg-gray-100 shadow-lg rounded-lg p-5'>
				<div className="container-text flex justify-between pb-3 border-b-2 border-gray-300">
					<h2 className='text-xl font-semibold text-gray-500'>Your Images</h2>
					<div className="actions border rounded-full flex overflow-hidden">
						<span onClick={switchGrid} className={`${(grid)?'bg-blue-200':''} ps-4 pe-2 py-1.5 cursor-pointer`}><BsFillGrid1X2Fill /></span>
						<span onClick={switchGrid} className={`${(!grid)?'bg-blue-200':''} pe-4 ps-2 py-1.5 cursor-pointer`}><FaList /></span>
					</div>
				</div>

				<div className="grid-container">
										
				</div>
			</div>
		</div>
	)
}

export default ImageGallery
