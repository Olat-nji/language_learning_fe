import React from 'react'
import CustomButton from '../common/common-button/common-button'

const ReadytoStartSection = () => {
    return (
        <div className='bg-secondary-100 w-full p-4 sm:p-6 md:p-10'>
            <div className='bg-white w-full px-4 py-20 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 lg:py-32'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-0 max-w-7xl mx-auto'>
                    <div className='flex flex-col justify-center items-start lg:w-1/2 gap-5 '>
                    <h1 className='text-secondary-60 text-2xl sm:text-3xl md:text-4xl font-axiformaSemiBold font-semibold leading-tight tracking-wide text-center lg:text-left '>
                            Ready To <b className='text-secondary-120'>Start Your Language Adventure?</b>
                    </h1>
                        <CustomButton variant='primary' size='lg' children="Delve In" className='hidden sm:flex' />
                    </div>
                    <p className='font-axiformaMedium font-normal max-w-[312px] md:max-w-[700px] text-sm sm:text-base leading-relaxed text-center lg:text-left lg:w-1/2'>
                        Dive in now and play the game to explore different quests, beat the clock, and master new languages with ease. Start your journey today!
                    </p>
                    <CustomButton variant='primary' size='default' children="Delve In" className=' flex sm:hidden w-[90%] ' />
                </div>
            </div>
        </div>
    )
}

export default ReadytoStartSection