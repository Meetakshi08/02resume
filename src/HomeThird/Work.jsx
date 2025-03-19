import React from 'react'
import Image from './Image'
import Button from '../Button/Button'
// import Card from './Card'
import { useNavigate } from 'react-router-dom'

function Work() {
 const navigate=useNavigate();
  return (
    <>
    
    <div className='pl-2 pt-6 justify-end'>
        <h1 className='text-center text-yellow-700  text-4xl'>Our Work</h1>
        <br></br>
        
    <div className='flex p-8 gap-8 justify-end'>
        <Image url="https://cdn.prod.website-files.com/65f5f834fb31bfc79e83b230/65fcc82f42342ec97c53ded1_latest_residential_design_trends.png"/>
        <Image url="https://edwardgeorgelondon.com/wp-content/uploads/2024/07/11smallhomeinteriordesignideas3123644.jpgv=1711455681"/>
        <Image url="https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/f7b2fa0d-aa9b-4515-9730-52e3577061a3/_aeb9272c-7efe-42cc-a2ae-788f924a2bad.jpg?format=750w"></Image>
       <div>
       <h1 className='text-5xl text-center'>Completed Projects</h1>
       <p className='text-2xl'> "Designing dreams into reality, one space at a time."</p>
       <br></br>
       <Button value="All Project >"  to="/about"/>
       
       </div>
        
        
    </div>
    <div className='flex pl-8 gap-8'>
        <Image url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSvjw9OdgGr7pxhTL-NiHDnz4zS9sYMN3-HDPuexfQfwvBrWD33PTmazcp0WeiFavYNE&usqp=CAU"/>
        <Image url="https://cdn.prod.website-files.com/65f5f834fb31bfc79e83b230/65fcc82f42342ec97c53ded1_latest_residential_design_trends.png"/>
        <Image url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Z6YwOqkBvzPCcjgGe8LVfIR6-ErnKZsP1g&s"/>
       
     
    </div>


    </div>



  
    </>
  )
}

export default Work