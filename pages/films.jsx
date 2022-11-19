import React, { useState } from 'react';
import { animate, motion } from "framer-motion"

const Flims = () => {

    const [currentPage, setCurrentPage] = useState('wedding');

    return (
        <motion.div

            initial={{
                opacity: 0,

            }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
        >










            <div className='relative lg:h-[80vh] h-[20vh] w-full bg-black '>
                <div className='z-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' role="status">
                    <svg aria-hidden="true" className="mr-2 lg:w-16 lg:h-16 h-4 w-4 text-gray-200 animate-spin dark:text-gray-600 fill-main" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
                <video className='w-full h-full object-cover absolute z-20' autoPlay loop muted>
                    <source src="/video/video1.mp4" type="video/mp4" />
                </video>


            </div>








            <div className='py-32  flex justify-center' >

                <div className='grid grid-cols-4 lg:gap-20 gap-10 font-display lg:text-xl text-sm' >
                    <div className='hover:text-main text-center'>
                        <h2 onClick={() => setCurrentPage('wedding')} className={`cursor-pointer  transition-all border-b-2 ${currentPage === 'wedding' ? ' border-main' : 'border-white'}`} >WEDDING</h2>
                    </div>
                    <div className='hover:text-main text-center'>
                        <h2 onClick={() => setCurrentPage('fashion')} className={`cursor-pointer transition-all border-b-2 ${currentPage === 'fashion' ? ' border-main' : 'border-white'} `} >FASHION</h2>
                    </div>
                    <div className='hover:text-main text-center' >
                        <h2 onClick={() => setCurrentPage('food')} className={`cursor-pointer   transition-all border-b-2 ${currentPage === 'food' ? ' border-main' : 'border-white'}`} >FOOD</h2>
                    </div>

                    <div className='hover:text-main text-center' >
                        <h2 onClick={() => setCurrentPage('documentary')} className={`cursor-pointer   transition-all border-b-2 ${currentPage === 'documentary' ? ' border-main' : 'border-white'}`} >DOCUMENTARY</h2>
                    </div>
               

                </div>

            </div>





            <div className='container mx-auto '>
           
                <div>
                    <div className="pb-32 grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">
                        <div className="w-full lg:h-96 h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/UYuN55OKRWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="w-full lg:h-96 h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/E-2XF3sTuyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="w-full lg:h-96 h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/-dVMNpamI-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="w-full lg:h-96 h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/oIhD1_t4JO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="w-full lg:h-96 h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/CNU1AP-nHOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="w-full lg:h-96 h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/1KTuT1OVh8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="w-full lg:h-96 h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/LviLU7Fwuw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>


                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Flims;