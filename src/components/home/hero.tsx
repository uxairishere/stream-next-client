import React from 'react'
import Image from 'next/image'
import mainLogo from '../../assets/icons/microsoft-stream.svg';

const Hero = () => {
  return (
    <div>
        <div className='grid grid-cols-3 w-[70%] mx-auto text-center items-center py-[3rem]'>
            <div className='col-span-1'>
                <Image width={350} src={mainLogo} alt="..."/>
            </div>
            <div className='col-span-2'>
                <h1 className='text-5xl font-bold'>Stream Next</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi, quam saepe quisquam temporibus, sint voluptas omnis perspiciatis voluptate repellendus, ipsam magnam mollitia sed tempore. Architecto ab suscipit reiciendis consectetur.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero