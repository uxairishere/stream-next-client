
import React from 'react'

const Cards = (props: any) => {
    return (
        <div>
            <div className='bg-gray-500 w-full h-[15rem] md:h-[25rem] rounded-lg relative'
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.data.poster_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className='absolute h-full overflow-auto p-4 opacity-0 hover:opacity-100 duration-300' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h1 className='text-white text-xl mb-2'>{props.data.name ? props.data.name : props.data.title}</h1>
                    <p className='text-sm mb-2'>Rating: {props.data.vote_average}</p>
                    
                    <p className='text-sm'>{props.data.overview}</p>
                    <div className='text-center'>
                    <button className='bg-yellow-500 text-black font-bold w-[90%] mx-auto my-3 py-2 rounded-md'>WATCH</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards