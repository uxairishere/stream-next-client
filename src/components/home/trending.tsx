import React from 'react'

const Trending = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFA500" fill-opacity="1" d="M0,96L40,101.3C80,107,160,117,240,138.7C320,160,400,192,480,218.7C560,245,640,267,720,229.3C800,192,880,96,960,80C1040,64,1120,128,1200,128C1280,128,1360,64,1400,32L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
            <div className='bg-primary'>
                <div className='w-[70%] mx-auto'>
                <h1 className='md:text-3xl font-bold text-center mb-2'>Whats Trending</h1>
                <p className='mb-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem corrupti sit recusandae nulla nam fugiat libero sapiente eaque deleniti a quibusdam voluptatibus harum facere fuga quas, porro, minima iure aperiam?</p>
                <div className='md:grid md:grid-cols-3 md:gap-10 '>
                    <div className='w-full h-[15rem] bg-white rounded-lg hover:shadow-2xl'></div>
                    <div className='w-full h-[15rem] bg-white rounded-lg hover:shadow-2xl'></div>
                    <div className='w-full h-[15rem] bg-white rounded-lg hover:shadow-2xl'></div>
                </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFA500" fill-opacity="1" d="M0,96L40,101.3C80,107,160,117,240,138.7C320,160,400,192,480,218.7C560,245,640,267,720,229.3C800,192,880,96,960,80C1040,64,1120,128,1200,128C1280,128,1360,64,1400,32L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
        </div>
    )
}

export default Trending