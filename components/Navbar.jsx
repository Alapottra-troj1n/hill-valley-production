import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Navbar = () => {

    const [bgChange, setBgChance] = useState(false);
    const { data, status } = useSession();
    const [showNav, setShowNav] = useState(true);
    const router = useRouter();
    const { pathname } = router;

    useEffect(() => {

        const changeNavbar = () => {

            if (window.scrollY >= 790) {
                setBgChance(true);
            } else if (window.scrollY <= 550) {
                setBgChance(false);
            }

        }



        window.addEventListener('scroll', changeNavbar);


        return () => {
            window.removeEventListener("scroll", changeNavbar);
        }

    }, []);

    useEffect(() => {
     
        setShowNav(!showNav);
       
    }, [pathname])





    const navLinks = <>
        <Link href={'/'} ><li className={`cursor-pointer hover:text-main_light transition-all `} >HOME</li></Link>
        <Link href={'/photography'} ><li className={`cursor-pointer hover:text-main_light transition-all `} >PHOTOGRAPHY</li></Link>
        <Link href={'/films'} ><li className={`cursor-pointer hover:text-main_light transition-all `} >FILMS</li></Link>
        <Link href={'/contact'} ><li className={`cursor-pointer hover:text-main_light transition-all `} >CONTACT</li></Link>
        {status === 'authenticated' && <Link href={'/admin/dashboard'} ><li className={`cursor-pointer hover:text-main_light transition-all `} >DASHBOARD</li></Link>}
        {status === 'authenticated' && <button onClick={signOut} className='cursor-pointer btn bg-main border-0 transition-all btn-sm' >Log Out</button>}
     

    </>



    return (
        <div className={`fixed ${bgChange ? 'bg-white shadow-lg' : pathname.includes('/admin') === true ? 'bg-white shadow-lg' : ''} w-full z-50 transition-all`}>
            <div className="py-2 font-display font-semibold text-[16px] tracking-wide">
                <div className="navbar container mx-auto ">
                    <div className="lg:navbar-start justify-between  w-full">
                        <div className="dropdown ">

                            <label onClick={() => setShowNav(!showNav)} tabIndex={0} className="btn btn-ghost lg:hidden mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${bgChange ? 'text-gray-700' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            {showNav && <ul tabIndex={0} className={` menu menu-compact   dropdown-content mt-3 shadow bg-base-100 rounded-box w-52 gap-8 lg:text-white p-5`}>
                                {navLinks}
                            </ul>}

                        </div>
                        <div className="cursor-pointer text-xl relative right-4 lg:right-0 lg:w-[200px] lg:h-[69px] w-28 h-10">
                            {bgChange || pathname.includes('/admin') === true ? <Link href={'/'} ><Image alt='logo' src={'/logo_black.png'} layout="fill" objectFit='cover' /></Link>: <Link href={'/'} ><Image alt='logo' src={'/logo_white.png'} layout="fill" objectFit='cover' /></Link>}
                        </div>
                    </div>
                    <div className="navbar-end hidden lg:flex  ">
                        <ul className={`menu menu-horizontal p-0 md:gap-5 xl:gap-7  text-sm lg:text-md ${bgChange || pathname.includes('/admin') === true ? 'text-gray-700' : 'lg:text-white'} lg:items-center`}>
                            {navLinks}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;