import Image from 'next/image';
import React from 'react';
import connectDb from '../../lib/connectDb';
const { ObjectId } = require("mongodb");
import { isMobile } from 'react-device-detect';

const Post = ({ data }) => {



    return (
        <div className="text-white " >
            {isMobile ? <div rel='preload' style={{ backgroundImage: `url(${data[0]["mobile cover"]})` }} className={`flex justify-center items-center bg-no-repeat bg-cover bg-center lg:h-[80vh] h-[70vh] bg-fixed bg-slate-200`} >

                <h2 className='font-display text-center text-3xl lg:text-7xl font-semibold' >{data[0].title}</h2>

            </div> : <div rel='preload' style={{ backgroundImage: `url(${data[0].coverphoto})` }} className={`flex justify-center items-center bg-no-repeat bg-cover bg-center lg:h-[80vh] h-[50vh] bg-fixed bg-slate-200`} >

                <h2 className='font-display text-center text-3xl lg:text-7xl font-semibold' >{data[0].title}</h2>

            </div>}

            <div className='py-24 container mx-auto text-slate-500 font-normal font-type  lg:px-40  px-4'>




                {/*************** PHOTOS START FROM HERE ***************/}
                <h2 className='leading-6 text-xs lg:text-sm lg:leading-7'>{data[0]?.story ? data[0].story : ''}</h2>

                <div className="py-20 grid grid-cols-1 lg:px-0 gap-10" >



                    <div className="relative lg:h-[700px] h-[300px] w-full " >
                        <Image src={data[0].img1} alt='img1' layout='fill' objectFit='cover' objectPosition={'center'} />
                    </div>

                    <div className="relative lg:h-[700px] h-[300px] w-full " >
                        <Image src={data[0].img2} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                    </div>

                    {/***************** 2 COLUMNS *****************/}

                    <div className="grid grid-cols-2 gap-10">

                        <div className="relative lg:h-[700px] h-[200px] w-full " >
                            <Image src={data[0].img3} alt='img3' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </div>
                        <div className="relative lg:h-[700px] h-[200px] w-full " >
                            <Image src={data[0].img4} alt='img4' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </div>

                    </div>

                    <div className="relative lg:h-[700px] h-[300px] w-full " >
                        <Image src={data[0].img5} alt='img5' layout='fill' objectFit='cover' objectPosition={'center'} />
                    </div>

                    <div className="relative lg:h-[700px] h-[300px] w-full " >
                        <Image src={data[0].img6} alt='img6' layout='fill' objectFit='cover' objectPosition={'center'} />
                    </div>


                    {/***************** 2 COLUMNS *****************/}

                    <div className="grid grid-cols-2 gap-10">

                        <div className="relative lg:h-[700px] h-[200px] w-full " >
                            <Image src={data[0].img7} alt='img7' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </div>
                        <div className="relative lg:h-[700px] h-[200px] w-full " >
                            <Image src={data[0].img8} alt='img8' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </div>

                    </div>



                    <div className="relative lg:h-[700px] h-[300px] w-full " >
                        <Image src={data[0].img9} layout='fill' alt='img9' objectFit='cover' objectPosition={'center'} />
                    </div>

                    <div className="relative lg:h-[700px] h-[300px] w-full " >
                        <Image src={data[0].img10} layout='fill' alt='img10' objectFit='cover' objectPosition={'center'} />
                    </div>




                </div>





            </div>

        








        </div>
    );
};

export default Post;





export async function getStaticPaths() {
    const db = await connectDb();
    const allPosts = await db.collection('posts').find({}).toArray();

    const paths = allPosts.map(post => {
        return {
            params: {
                id: post._id.toString()
            }
        }
    })





    return {
        paths,
        fallback: 'blocking', // can also be true or 'blocking'



    }
}





export async function getStaticProps(context) {



    const { id } = context.params;



    const db = await connectDb();
    const post = await db.collection('posts').find({ _id: ObjectId(id) }).toArray();




    if (!post) {
        return {
            notFound: true,
        };
    }




    return {
        props: { data: JSON.parse(JSON.stringify(post)) },
        // will be passed to the page component as props
        revalidate: 7200,
    }
}