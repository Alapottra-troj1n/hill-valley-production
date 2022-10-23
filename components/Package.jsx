import React from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { GiCheckMark } from 'react-icons/gi';
import Link from 'next/link';

const Package = ({ pack }) => {

   

    return (
        <div className='flex flex-col justify-between bg-white p-12 shadow-sm' >

            <div className='text-center font-display font-semibold' >

                <div className='flex justify-center items-center text-3xl' >
                    <HiOutlineMinus className='text-main' />
                    <h2 className='lg:text-xl text-base mx-4 ' >{pack?.name}</h2>
                    <HiOutlineMinus className='text-main' />
                </div>

                <h2 className='lg:text-5xl text-4xl mt-5 whitespace-nowrap' > <span className='text-main' >{pack?.price}</span> BDT</h2>


            </div>

            <div className='mt-8 font-type flex flex-col gap-6 text-xs lg:text-sm'>

                {pack?.details.map(list => {

                    return (
                        <>
                            <div className='flex items-center' >
                                <GiCheckMark className='text-main text-xl' />
                                <h2 className='px-4'>{list}</h2>
                            </div>
                        </>)
                })}



            </div>

            <div className='mt-9 text-center font-display '>

                <Link href={'/contact'} ><button className='lg:px-10 px-5 lg:py-3 py-2 text-sm lg:text-xl  border-2 border-main rounded-md hover:bg-main hover:text-white transition-all' >Contact</button></Link>

            </div>




        </div>
    );
};

export default Package;