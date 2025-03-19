import React from 'react'
import Box from './Box'

function Photo() {
  return (
    <div className='relative text-amber-100'>
      {/* Background Image */}
      <img
      src="https://karpagamarch.in/demo/wp-content/uploads/2023/10/Eco-Friendly-Interior-Design_-Sustainable-and-Stylish-scaled.jpg"
        alt="Interior Design"
        className="h-svh w-full object-cover rounded-lg"
      />

      {/* Box Component with z-index */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Box />
      </div>
    </div>
  )
}
export default Photo


// home page ka 2 page jis mai background image hai 
