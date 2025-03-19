import React, { useState } from 'react';
import Map from '../HomeFive/Map';
import Footer from '../Footer';
function Image({ url }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Small Image */}
      <img
        src={url}
        alt="Completed Work"
        className="w-60 h-60 cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => setIsOpen(true)}
      />

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <img src={url} alt="Full Size" className="max-w-full max-h-full" />
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}

function First() {
  return (
    <>
      <div className="h-[150px] bg-gray-700 py-8">
        <h1 className="text-white text-2xl text-center">WORK</h1>
        <h1 className="text-white text-4xl text-center">Completed Works</h1>
      </div>

      <div className="pt-6 flex gap-10 flex-wrap justify-center">
        <Image url={'https://htl-img-res-new.s3.ap-south-1.amazonaws.com/7490/20250121/main.jpg'} />
        <Image url={'https://content.jdmagicbox.com/comp/jaipur/e8/0141px141.x141.170812131152.f2e8/catalogue/k-k-interior-chandpole-bazar-jaipur-interior-designers-p5k3olg7tw.jpg'} />
        <Image url={'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/elegant-living-room-featuring-modern-sofa-and-decor/modern-living-room-with-sofa-and-decor.jpg.transform/bh-gallery-listing/image.webp'} />
        <Image url={'https://jdinstituteoffashiontechnology.com/wp-content/uploads/2024/08/DALL%C2%B7E-2024-10-13-17.47.13-A-modern-interior-design-scene-in-India-showcasing-a-mix-of-traditional-and-contemporary-elements.-The-setting-includes-a-stylish-living-room-with-vib.webp'} />
        <Image url={'https://whitehillsinterior.in/wp-content/uploads/2023/12/colorful-office-desks-chairs-are-neatly-arranged-there-is-nobody-sight-vibrant-atmosphere-awaits-hustle-bustle-busy-workday-1.webp'} />
        <Image url={'https://www.mymodernhome.com/media/images/My_Modern_Home_Plan.42bfa37b.fill-1920x1080.format-webp.webp'} />
        <Image url={'https://skdesignconstructions.com/images/services/3.jpg'} />
        <Image url={'https://ansainteriors.com/wp-content/uploads/2019/01/4-13.jpg'} />

      </div>

     <br></br>
      <Map />
      <Footer/>
    </>
  );
}

export default First;
