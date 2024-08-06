"use client"
import React, { useState, useRef } from 'react';

const backgrounds = [
  { video: '/images/landing/firebgvideo8sec.mp4', thumbnail: '/images/landing/HeroBgHouseONFire.jpeg' },
  { video: '/images/landing/backgroundVideo1.mp4', thumbnail: '/images/landing/HeroInitBgImg.png' },
  { video: '/images/landing/backgroundVideo1.mp4', thumbnail: '/images/landing/HeroBgBedRoom.jpeg' },
  { video: '/images/landing/backgroundVideo1.mp4', thumbnail: '/images/landing/HeroBgAccident.jpeg' },
];


const HeroSection: React.FC = () => {
  const [activeBgIndex, setActiveBgIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null)

  const activeBg = backgrounds[activeBgIndex];

  return (
    <section className="flex h-screen w-full flex-col p-4 mx-auto items-center justify-center">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-500 ease-in-out">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
          src={activeBg.video}
          autoPlay
          muted
          loop
          poster={activeBg.thumbnail}
        />
        <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-secondary-100 via-transparent-black-10 opacity-85 to-transparent"></div>

        <h1 className={`relative z-10 font-axiformaMedium text-center text-4xl sm:text-4xl md:text-5xl lg:text-[62px] font-semibold leading-tight sm:leading-snug md:leading-normal lg:leading-[90px] tracking-wide sm:w-full w-[370px] max-w-[400px] sm:max-w-[630px] text-white`}>
          Learn Languages The Fun Way
        </h1>

        <div className="absolute bottom-0 flex flex-col items-center justify-center border-[#FFFFFF20] border rounded-t-[36px] bg-[#212121D9] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[408px]">
          <div className="flex flex-row w-full justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 px-2 sm:px-3 md:px-4 lg:px-5 pt-5 pb-3">
            {backgrounds.map((bg, index) => (
              <div
                key={index}
                className={`w-[18%] sm:w-[20%] md:w-[22%] lg:w-[90px] aspect-square bg-cover bg-center rounded-2xl cursor-pointer transition-all duration-300 ${activeBgIndex === index ? 'border-2 border-white' : 'border border-transparent'}`}
                onClick={() => setActiveBgIndex(index)}
              >
                <img
                  className="w-full h-full object-cover object-center rounded-2xl"
                  src={bg.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-center items-center w-full border-t border-[#FFFFFF40] py-2 sm:py-3 md:py-4">
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-[18px] font-axiformaMedium">Explore Quests</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




// ${ activeBgIndex === 2 ? 'text-black' : 'text-white' }