import Image from 'next/image';
import React from 'react';

const features = [
    {
        imgSrc: '/images/landing/Illustration Container.png',
        title: 'Converse with Characters',
        description: 'Practice speaking with others in real-life situations, perfect your pronunciation, and boost your confidence. Each conversation is crafted to make language learning a breeze.'
    },
    {
        imgSrc: '/images/landing/Illustration Container (1).png',
        title: 'Learn Multiple Languages',
        description: 'Ready to master more than one language? We make it simple and fun to learn multiple languages at once. Switch between languages with ease, track your progress, and stay engaged.'
    },
    {
        imgSrc: '/images/landing/Frame 1686561247.png',
        title: 'Explore Different Quests',
        description: 'Ready to master more than one language? We make it simple and fun to learn multiple languages at once. Switch between languages with ease, track your progress, and stay engaged.'
    },
    {
        imgSrc: '/images/landing/stopwatch-svgrepo-com 1.png',
        title: 'Beat the Clock',
        description: 'Put your skills to the test and race against time! Complete challenges quickly to advance and earn extra points for finishing fast. It’s all about staying sharp and quick.'
    }
];

const HomeKeyFeaturesSection = () => {
    return (
        <div className='bg-white flex flex-col p-5 md:p-10 pt-14 justify-center items-center gap-2 w-full'>
            <h4 className='text-[16px] md:text-2xl font-axiformaMedium font-medium leading-[30px] text-primary-110 py-3'>
                Discover Our Key Features
            </h4>
            <div className="grid grid-cols-1 gap-y-10 place-self-center place-content-center place-items-center md:grid-cols-2 justify-center items-center bg-secondary-120 p-5 md:p-10 pt-5 gap-3 w-full border-[4px] border-secondary-20">
                {features.map((feature, index) => (
                    <div key={index} className='flex flex-col w-[100%] md:w-full h-[400px] sm:h-[500px]  justify-center items-center border-[#FFFFFFCC] border-[6px]'>
                        <div className='flex flex-col w-full h-full border-[8px] justify-center items-center border-secondary-90'>
                            <div className='relative flex flex-col w-full h-full justify-center items-center border-[6px] border-secondary-70'>
                                <Image src={"/images/landing/Shapes.png"} alt='shape1' width={270} height={270} className='absolute top-0 left-0 z-0 hidden sm:hidden md:hidden lg:block' />
                                <Image src={"/images/landing/Shapes (1).png"} alt='shape2' width={270} height={270} className='absolute top-0 right-0 hidden sm:hidden md:hidden lg:block' />
                                <Image src={"/images/landing/Shapes (2).png"} alt='shape3' width={270} height={270} className='absolute bottom-0 left-0 hidden sm:hidden md:hidden lg:block' />
                                <Image src={"/images/landing/Shapes (3).png"} alt='shape4' width={270} height={270} className='absolute bottom-0 right-0 hidden sm:hidden md:hidden lg:block' />
                                <Image src={"/images/landing/Shapes (4).png"} alt='shape1' width={400} height={400} className='absolute top-0 left-0 w-full lg:hidden sm:w-full' />
                                <div className='flex flex-col justify-center items-center w-full z-20 space-y-2 p-3'>
                                    <Image
                                        src={feature.imgSrc}
                                        alt='feature image'
                                        width={index === 2 ? 160 : 100}
                                        height={index === 2 ? 150 : 90}
                                        className={` w-[60px] md:w-[100px] ${index == 2 ? "w-[100px] md:w-[200px] " : ""}`}
                                    />
                                    <h1 className='text-white font-axiformaBold font-bold text-[20px] md:text-[24px] leading-[30px] xl:leading-[56px] tracking-[1.25px] text-center'>
                                        {feature.title}
                                    </h1>
                                    <p className='text-[14px] md:text-[16px] text-secondary-60 text-center w-[90%]'>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeKeyFeaturesSection;
