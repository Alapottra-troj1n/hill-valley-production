import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LongPhotoCard = ({data}) => {
    return (
        <Link href={`post/${data._id}`}>
            <div className="h-full cursor-pointer " >
                <div className='relative lg:h-[562px] h-[320px]  lg:w-full' >
                    <Image alt='logo' layout='fill' objectFit='cover' src={data?.["mobile cover"]} />
                </div>
                <h2 className='font-display text-xl text-center mt-3  hover:text-main transition-all' >{data.title}</h2>

            </div>
        </Link>
    );
};

export default LongPhotoCard;