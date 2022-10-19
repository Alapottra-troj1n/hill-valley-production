import React, { useState } from 'react';
import Fashion from '../components/Photography/Fashion';
import Food from '../components/Photography/Food';
import Wedding from '../components/Photography/Wedding';

const Photography = () => {


    const [currentPage, setCurrentPage] = useState('wedding');


    return (
        <div>
            <div className="flex justify-center items-center bg-[url('https://i.ibb.co/wz4P1fp/display-picture.jpg')] bg-no-repeat bg-cover bg-center bg-black lg:h-[80vh] h-[50vh] bg-[center_top_-44rem] bg-fixed" >



            </div>


            <div className='py-32 flex justify-center' >

                <div className='grid grid-cols-3 gap-36 font-display text-xl ' >
                    <div className='hover:text-main'>
                        <h2 onClick={()=> setCurrentPage('wedding')} className='cursor-pointer  transition-all' >WEDDING</h2>
                    </div>
                    <div className='hover:text-main'>
                        <h2 onClick={()=> setCurrentPage('fashion')} className='cursor-pointer transition-all' >FASHION</h2>
                    </div>
                    <div className='hover:text-main' >
                        <h2 onClick={()=> setCurrentPage('food')} className='cursor-pointer   transition-all' >FOOD</h2>
                    </div>

                </div>

            </div>


          <div className='py-16 flex justify-center' >

          {currentPage === 'wedding' && <Wedding/> }
            {currentPage === 'fashion' && <Fashion/> }
            {currentPage === 'food' && <Food/> }

          </div>


        </div>
    );
};

export default Photography;