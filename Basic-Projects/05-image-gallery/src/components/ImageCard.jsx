import React, { useState } from 'react';

function ImageCard({assets}) {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {assets.map((image, index) => (
        <div key={index} className='card border p-2 rounded-lg bg-white'>
          <div className="card-image">
            <img src={image.src} alt={image.alt} className='w-full h-[200px] object-cover rounded-lg' />
          </div>
          <div className="card-text mt-5 p-3">
            <h2 className='text-xl font-medium text-gray-500 mb-1'>{image.title}</h2>
            <p className='text-sm mb-5'>{image.desc}</p>
            <button  onClick={() => setSelectedImage(image.src)} className='border px-2 py-1 rounded-full cursor-pointer hover:bg-blue-200'>View Image</button>
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button className="absolute top-1 right-1 text-gray-600 hover:text-black cursor-pointer" onClick={() => setSelectedImage(null)}>
              ❌
            </button>
            <img src={selectedImage} alt="Zoomed" className="max-w-full max-h-[80vh]" />
          </div>
        </div>
      )}
    </>
  )
}

export default ImageCard