import React from 'react'

function Image({url}) {  // Destructure props
  return (
    <div>
        <img src={url} alt='Interior Design' className='h-64 rounded-lg mb-8' ></img>
    </div>
  )
}

export default Image;
