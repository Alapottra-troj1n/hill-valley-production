import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillFacebook,AiFillYoutube,AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className="bg-[#363535] text-white pt-36 pb-20 flex justify-around items-center" >

            <div className="flex gap-10 text-lg font-display list-none" >
                <div className="flex flex-col gap-3 " >
                    <Link href={'/'} ><li className='cursor-pointer hover:text-main transition-all' >Flims</li></Link>
                    <Link href={'/'} ><li className='cursor-pointer hover:text-main transition-all' >Photography</li></Link>
                    <Link href={'/'} ><li className='cursor-pointer hover:text-main transition-all' >Packages</li></Link>
                </div>
                <div className="flex flex-col gap-3" >
                    <Link href={'/'} ><li className='cursor-pointer hover:text-main transition-all' >Questions</li></Link>
                    <Link href={'/'} ><li className='cursor-pointer hover:text-main transition-all' >Contact</li></Link>

                </div>

            </div>

            <div className="flex flex-col items-center gap-5" >

                <Image src={'/Logo.png'} height={104} width={221} />
                <p className='text-sm font-type text-center' >When you acquire an understanding of the science behind light and what governs it, then you can <br />  predict its behavior and control the lighting in photographs.</p>


            </div>

            <div className="flex flex-col items-center gap-5">
                <h2 className='text-2xl font-semibold font-display' >Stay with us</h2>
                <div className='flex items-center gap-4' >
                <a href='https://www.facebook.com/hillvalleyproduction' target='_blank' ><AiFillFacebook className='text-3xl cursor-pointer hover:text-main transition-all'/></a>
                <a href='https://www.instagram.com/productionhillvalley/' target='_blank' ><AiFillYoutube className='text-4xl cursor-pointer hover:text-main transition-all' /></a>
                <a href='https://www.youtube.com/c/HillValleyProduction' target='_blank' > <AiFillInstagram className='text-3xl cursor-pointer hover:text-main transition-all' /></a>
                </div>
            </div>


        </div>
    );
};

export default Footer;