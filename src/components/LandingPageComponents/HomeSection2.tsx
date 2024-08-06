import React from 'react'

const HomeSection2 = () => {
    return (
        <div className='bg-secondary-100 w-full p-4 sm:p-6 md:p-10'>
            <div className='bg-white w-full px-4 py-20 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 lg:py-32'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-14 max-w-7xl mx-auto'>
                    <h1 className='text-secondary-60 text-2xl sm:text-3xl md:text-4xl font-axiformaSemiBold font-semibold leading-tight tracking-wide text-center lg:text-left lg:w-1/2'>
                        Become a <b className='text-secondary-120'>Language Master</b> by Delving into a World of <b className='text-secondary-120'>Immersive Experiences</b>
                    </h1>
                    <p className='font-axiformaMedium font-normal max-w-[312px] md:max-w-[700px] text-sm sm:text-base leading-relaxed text-center lg:text-left lg:w-1/2'>
                        Discover our diverse selection of quests that make language learning more effective. By stepping into different real-life scenarios and becoming the main character, you'll find yourself mastering languages with ease. Many say it's the best way to learn!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeSection2