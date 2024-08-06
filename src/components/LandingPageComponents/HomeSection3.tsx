import Image from 'next/image';
import React from 'react';
import { Carousel } from '~/components/carousel';

const HomeSection3 = () => {
  const slides = [
    {
      text: 'Can you escape the creepy man...in German?',
      backgroundColor: 'bg-secondary-120',
      imageUrl: '/images/landing/Image (1).png',
      mobileImageUrl: "/images/landing/Image (6).png"
    },
    {
      text: 'Can you rescue a baby...in Vietnamese?',
      backgroundColor: 'bg-white',
      imageUrl: '/images/landing/Image (2).png',
      mobileImageUrl: "/images/landing/Image (7).png"
    },
    {
      text: 'Can you find your missing sibling...in Spanish?',
      backgroundColor: 'bg-secondary-120',
      imageUrl: '/images/landing/Image (3).png',
      mobileImageUrl: "/images/landing/Image (8).png"
    },
    {
      text: 'Can you catch the train...in French?',
      backgroundColor: 'bg-white',
      imageUrl: '/images/landing/Image (4).png',
      mobileImageUrl: "/images/landing/Image (9).png"
    },
    {
      text: 'Can you reach your rescue team...in English?',
      backgroundColor: 'bg-secondary-120',
      imageUrl: '/images/landing/Image (5).png',
      mobileImageUrl: "/images/landing/Image (10).png"
    },
  ];

  return (
    <div className='bg-white flex flex-col p-5 md:p-10 pt-14 justify-center items-center gap-2 w-full'>
      <h4 className='text-[16px] md:text-2xl font-axiformaMedium font-medium leading-[30px] text-primary-110 py-3'>
        Step Into Language Quests
      </h4>
      <Carousel interval={5000} className="w-full">
        {slides.map((slide, index) => (
          <div key={index}>
            <div className={`flex flex-col justify-center items-center ${slide.backgroundColor} p-5 md:p-10 pt-5 gap-3 w-full border-[4px] border-secondary-20`}>
              <h3 className={`text-[16px] md:text-[32px] font-axiformaSemiBold font-semibold leading-tight md:leading-[48px] tracking-[1.28px] w-full text-center ${slide.backgroundColor === 'bg-secondary-120' ? 'text-white' : 'text-secondary-120'}`}>
                {slide.text.split('...in ')[0]}...in <span className='text-primary-120'>{slide.text.split('...in ')[1]}</span>
              </h3>
              <div className='w-full'>
                <Image
                  src={slide.imageUrl}
                  alt={`Slide ${index + 1}`}
                  width={1000}
                  height={1000}
                  className='w-full h-auto hidden md:block'
                />
                <Image
                  src={slide.mobileImageUrl}
                  alt={`Slide ${index + 1} (Mobile)`}
                  width={500}
                  height={500}
                  className='w-full h-auto md:hidden'
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSection3;