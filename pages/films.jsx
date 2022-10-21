import Image from 'next/image';
import React from 'react';

const Flims = () => {
    return (
        <div  >

            <div className=' relative lg:h-[60vh] h-[20vh] w-full'>
               
                <video className='w-full h-full object-cover absolute z-10' autoPlay loop>
                    <source src="/video/video1.mp4" type="video/mp4" />
                </video>
            </div>


            <div className='container mx-auto '>
            <div className="py-32 grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">
                <div className="w-full lg:h-96 h-72">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/E-2XF3sTuyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="w-full lg:h-96 h-72">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/-dVMNpamI-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="w-full lg:h-96 h-72">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/oIhD1_t4JO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Flims;