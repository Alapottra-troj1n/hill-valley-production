import React, { useEffect, useState } from 'react';
import Fashion from '../components/Photography/Fashion';
import Food from '../components/Photography/Food';
import Wedding from '../components/Photography/Wedding';

const Photography = () => {


    const [currentPage, setCurrentPage] = useState('wedding');

    const [bg, setBg] = useState('/photography/fashion.jpg');


    useEffect(() => {

        // if (currentPage === 'wedding') {
        //     setBg('https://i.ibb.co/1GYBJ0L/dfg.jpg')
        // } else if (currentPage === 'food') {
        //     setBg('https://i.ibb.co/Ntryhf7/food-bg.jpg')
        // } else if (currentPage === 'fashion'){
        //     setBg('https://i.ibb.co/Smc8Cf7/fashion-bg.jpg')
        // }

        if (currentPage === 'wedding') {
            setBg('/photography/wedding.jpg')
        } else if (currentPage === 'food') {
            setBg('/photography/food.jpg')
        } else if (currentPage === 'fashion'){
            setBg('/photography/fashion.jpg')
        }



    }, [currentPage])

 

    return (
        <div>
            <div rel="preload" style={{
                backgroundImage: `url(${bg})`,
            }} className={`flex justify-center items-center bg-no-repeat bg-cover lg:h-[80vh] h-[50vh] ${currentPage === 'wedding' ? 'lg:bg-[center_top_-44rem] bg-center' : 'bg-center'} bg-fixed`} >



            </div>


            <div className='py-32 flex justify-center' >

                <div className='grid grid-cols-3 lg:gap-36 gap-10 font-display lg:text-xl text-sm' >
                    <div className='hover:text-main text-center'>
                        <h2 onClick={() => setCurrentPage('wedding')} className={`cursor-pointer  transition-all border-b-2 ${currentPage === 'wedding' ? ' border-main' : 'border-white'}`} >WEDDING</h2>
                    </div>
                    <div className='hover:text-main text-center'>
                        <h2 onClick={() => setCurrentPage('fashion')} className={`cursor-pointer transition-all border-b-2 ${currentPage === 'fashion' ? ' border-main' : 'border-white'} `} >FASHION</h2>
                    </div>
                    <div className='hover:text-main text-center' >
                        <h2 onClick={() => setCurrentPage('food')} className={`cursor-pointer   transition-all border-b-2 ${currentPage === 'food' ? ' border-main' : 'border-white'}`} >FOOD</h2>
                    </div>

                </div>

            </div>


            <div className='py-16 flex justify-center' >

                {currentPage === 'wedding' && <Wedding />}
                {currentPage === 'fashion' && <Fashion />}
                {currentPage === 'food' && <Food />}

            </div>


        </div>
    );
};

export default Photography;