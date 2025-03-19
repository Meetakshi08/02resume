import React from 'react'


function Circle({value}) {
  return (
    <>
    <img src={value} className='h-[300px] w-[300px] rounded-full object-cover shadow-lg justify-center' alt="image" />

    
    </>
  )
}

export default Circle