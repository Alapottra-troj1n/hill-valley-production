import Image from 'next/image';
import React from 'react';

const PhotoCard = ({img,name}) => {
    return (
        <div  >
            <div className='relative h-[562px]  w-full' >
                <Image layout='fill' objectFit='cover' src={img} />
            </div>
            <h2 className='font-display text-xl text-center mt-3 cursor-pointer' >{name}</h2>

        </div>
    );
};

export default PhotoCard;