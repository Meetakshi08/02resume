
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"


function Card() {
  const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1
  };


  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>
        {data.map((d)=>(
          <div className="bg-white h-[450px]text-black rounded-xl">
            <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>

              </div>

              <div className='flex  flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p>{d.review}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
              </div>
            </div>
           

      
          )) }
          </Slider>

      </div>
    </div>
  )
}

const  data =[
  {
    name:`john`,
    img:`https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg`,
    review:`I absolutely loved the work. I would definitely recommend DesignCafe to anyone. They are very professional and made the entire experience amazing. The best part is that they clearly understood our requirements and budget, and provided the best possible home...`
  },
  {
    name:`mike john`,
    img:`https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg`,
    review:`Overall an excellent piece of work by DesignCafe. Truly overwhelmed by the complete Design and execution of the project....`
  },
  {
    name:`Poonam`,
    img:`https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=`,
    review:`My experience with DesignCafe's Whitefield Experience Centre was very good. High quality products are used overall in the project. Feedbacks and concerns if any were solved immediately. The final outcome is great and suitable to every family member.`
  },
  {
    name:`Harsh Johari`,
    img:`https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg`,
    review:`I am delighted with the Designs and the support I received from all the teams involved in shaping my dream house. Each person who interacted with me was very helpful and supportive.`
  }
]

export default Card