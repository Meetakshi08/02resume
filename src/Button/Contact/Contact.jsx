import React from 'react'
import Tags from './Tags'
import Map from '../../HomeFive/Map'
import Footer from '../../Footer'

function Contact() {
  return (
    <>
    <div className='h-[200px] bg-gray-700'>
        <h1 className='text-white text-center text-2xl py-8'>
            ___Contact___
        </h1>
        <h2 className='text-white text-center text-4xl'>Get In Touch With Us</h2>

    </div>

    
    <div className='pt-6 h-[403px] bg-gray-400 '>

    <br></br>
    <Tags/>
<br></br>
    <h1 className='text-center text-2xl pt-14'>
    💬  Have a dream space in mind? Let's make it a reality! Our experts at Nexa are here to assist you with all your interior design needs.</h1>
    </div>
    <Footer/>
    
    </>
  )
}

export default Contact