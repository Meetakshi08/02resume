import React from 'react'
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function Passionate() {
  const [rating,setRating] =useState(0);
  return (
    <>
    <div className="h-[700px] flex">

        <img src="/02resume/sofa.png" alt="house"  className=''/>

        <div>
        <h3 className='text-4xl text-center  '>WHO WE ARE</h3>
        <h2 className='text-center pt-6 text-2xl'>Passionate Professionals</h2>
        <br/>
        <p className='text-center text-xl'>At Nexa Interiors, we craft spaces that blend luxury, comfort, and functionality to reflect your unique style. Our designs merge modern aesthetics with timeless elegance, turning every corner into a masterpiece. From concept to creation, we redefine interiors that inspire, uplift, and bring life to your dream spaces. Let your space tell a story with Nexa — where design meets perfection.</p>
        <div className='h-52 bg-slate-300 rounded-md text-center pt-6 mt-20 w-96 justify-items-center mx-20'>
          <h1>Rate Us</h1>
          <p>"Rate us and help us create better spaces!"</p>
          <div className="flex justify-center items-center space-x-2 pt-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={30}
          className={`cursor-pointer ${
            star <= rating ? 'text-yellow-500' : 'text-black-400'
          }`}
          onClick={() => setRating(star)}
        />
      ))}
      <span className="text-lg font-semibold">{rating}/5</span>
    </div>
        </div>
        </div>
        

    </div>


    </>
  )
}

export default Passionate
 