import Image from 'next/image';
import React from 'react';

const PhotoCard = () => {
    return (
        <div>
            <div className='relative h-[562px] w-full' >
                <Image layout='fill' objectFit='cover' src={'/homepage4.png'} />
            </div>
            <h2 className='font-display text-xl text-center mt-3' >Nimmi & Dywen</h2>

        </div>
    );
};

export default PhotoCard;