import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    return (
        <>
            <div className=' bg-white' >
                <div className='text-center mt-16' >
                    <h2 className='font-display text-2xl' >Follow us on Instagram</h2>
                    <a href={'https://www.instagram.com/productionhillvalley/'} target='_blank' rel="noreferrer" className='font-type text-md cursor-pointer hover:text-main transition-all' >@productionhillvalley</a>

                </div>

                <div className='w-full xl:h-80  h-44 relative mt-16' >
                    <Image alt='photo-frame' src={'/frames.jpg'} layout='fill' objectFit='cover' objectPosition='center' />
                </div>
            </div>
            <div className="bg-[#363535] text-white pt-36 pb-20 flex flex-col xl:flex-row gap-16 xl:gap-0 justify-around items-center px-6 lg:px-0" >

                <div className="flex gap-10 text-lg font-display list-none" >
                    <div className="flex flex-col gap-3 " >
                        <Link href={'/films'} ><li className='cursor-pointer hover:text-main transition-all' >Films</li></Link>
                        <Link href={'/photography'} ><li className='cursor-pointer hover:text-main transition-all' >Photography</li></Link>
                       
                    </div>
                    <div className="flex flex-col gap-3" >

                        <Link href={'/contact'} ><li className='cursor-pointer hover:text-main transition-all' >Contact</li></Link>
                        <Link href={'/packages'} ><li className='cursor-pointer hover:text-main transition-all' >Packages</li></Link>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-5" >

                    <div className="cursor-pointer text-xl relative lg:w-[221px] lg:h-[104px] w-36 h-16 ">
                        <Image alt='logo' src={'/Logo.png'} layout="fill" objectFit='cover' />
                    </div>
                    <p className='lg:text-sm font-type text-center text-xs px-5 leading-4 lg:px-[20%]' >When you acquire an understanding of the science behind light and what governs it, then you can  predict its behavior and control the lighting in photographs.</p>


                </div>

                <div className="flex flex-col items-center gap-5">
                    <h2 className='text-2xl font-semibold font-display' >Stay with us</h2>
                    <div className='flex items-center gap-4' >
                        <a href='https://www.facebook.com/hillvalleyproduction' target='_blank' rel="noreferrer" ><AiFillFacebook className='text-3xl cursor-pointer hover:text-main transition-all' /></a>
                        <a href='https://www.youtube.com/c/HillValleyProduction' target='_blank' rel="noreferrer" ><AiFillYoutube className='text-4xl cursor-pointer hover:text-main transition-all' /></a>
                        <a href='https://www.instagram.com/productionhillvalley/' target='_blank' rel="noreferrer" > <AiFillInstagram className='text-3xl cursor-pointer hover:text-main transition-all' /></a>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Footer;