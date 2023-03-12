import React, {useState} from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer';
import Image from 'next/image';
import mainLogo from '../../assets/icons/microsoft-stream.svg';


const SignUp = () => {

    const [isUser, setIsUser] = useState(true)

    return (
        <div>
            <Header/>
            <div className='md:w-[30%] w-[90%] mx-auto my-[8rem]'>
                <div className='flex  justify-center md:space-x-2 items-center my-5'>
            <h1 className='text-3xl md:text-5xl  font-bold text-pink-700 main-heading'>Create Account</h1>
            <Image src={mainLogo} alt="loading logo..." className='md:w-[90px] w-[50px]'/>

            </div>
                <form action="" className='text-center'>
                    <input
                        type="text"
                        className='bg-white border mb-[1rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Full Name'
                        name='name'
                    />
                    <input
                        type="email"
                        className='bg-white border mb-[1rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Email'
                        name='email'
                    />
                    <input
                        type="password"
                        className='bg-white border mb-[1rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Password'
                        name='password'
                    />
                    <button className='btn-primary'>Create Account</button>
                    <a href='/login' className='block py-3 text-sm'>Already have and account?</a>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default SignUp