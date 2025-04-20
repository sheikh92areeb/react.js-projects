import React from 'react'
import ImageCard from './ImageCard';
import { assets } from '../assets/assets';

function ImageGallery() {
	
	return (
		<div className='container min-w-screen px-25 py-10'>
			<div className='w-full bg-gray-100 shadow-lg rounded-lg p-5'>
				<div className="container-text flex justify-between pb-3 border-b-2 border-gray-300">
					<h2 className='text-xl font-semibold text-gray-500'>Your Images</h2>					
				</div>

				<div className="grid-container grid grid-cols-3 gap-5 p-5">				
					<ImageCard assets={assets} />					
				</div>
			</div>
		</div>
	)
}

export default ImageGallery
