import React from 'react'
import Passionate from '../Main/Passionate'
import { useState } from 'react'
import Footer from '../Footer'

function Design() {
      const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className='flex flex-wrap justify-right bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("#6F4C7A")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#6F4C7A" }}> Lilac</button>
            <button onClick={() => setColor("#BDB395")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#BDB395" }}>Gray</button>
            <button onClick={() => setColor("#C1D8C3")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#C1D8C3" }}>Teal</button>
            <button onClick={() => setColor("#795757")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "#795757" }}>Brown</button>
            <button onClick={() => setColor("#CDC1FF")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#CDC1FF" }}>Lavender</button>
            <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "pink" }}>pink</button>
            <button onClick={() => setColor("#98D2C0")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#98D2C0" }}>Green</button>

          </div>
          <Passionate />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Design