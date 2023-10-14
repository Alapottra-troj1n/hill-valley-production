import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import connectDb from '../../lib/connectDb';
const { ObjectId } = require("mongodb");
import { isMobile } from 'react-device-detect';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "react-photo-view/dist/react-photo-view.css";
const Post = ({ data }) => {

    const [postBg, setPostBg] = useState('')

    useEffect(() => {

        if (isMobile) {
            setPostBg(<div className="relative h-[80vh]" ><Image src={data[0]["mobile cover"]} objectFit='cover' objectPosition='center' layout="fill" /> <h2 className=' text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-center font-semibold' >{data[0].title}</h2></div>)
        } else {
            setPostBg(<div rel='preload' style={{ backgroundImage: `url(${data[0].coverphoto})` }} className={`flex justify-center items-center bg-no-repeat bg-cover bg-center lg:h-[80vh] h-[50vh] bg-fixed bg-slate-200`} >

                <h2 className='font-display text-center text-3xl lg:text-7xl font-semibold war ' >{data[0].title}</h2>

            </div>)
        }


    }, [])

    return (
        <div className="text-white " >
            { postBg }

            <div className='py-24 container mx-auto text-slate-500 font-normal font-type  lg:px-40  px-4'>




                {/*************** PHOTOS START FROM HERE ***************/}
                <PhotoProvider
          maskOpacity={0.5}
          toolbarRender={({ onScale, scale }) => {
            return (
              <>
                <svg
                  className="PhotoView-Slider__toolbarIcon"
                  onClick={() => onScale(scale + 1)}
                />
                <svg
                  className="PhotoView-Slider__toolbarIcon"
                  onClick={() => onScale(scale - 1)}
                />
              </>
            );
          }}
        >
                <h2 className='leading-6 text-xs lg:text-sm lg:leading-7'>{data[0]?.story ? data[0].story : ''}</h2>

                <div className="py-20 grid grid-cols-1 lg:px-0 gap-10" >



                    <div className="relative lg:h-[700px] h-[300px] w-full  cursor-pointer">
                    <PhotoView src={data[0].img1}>
                        <Image src={data[0].img1} alt='img1' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                    </div>

                    <div className="relative lg:h-[700px] h-[300px] w-full  cursor-pointer" >
                    <PhotoView src={data[0].img2}>
                        <Image src={data[0].img2} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                    </div>

                    {/***************** 2 COLUMNS *****************/}

                    <div className="grid grid-cols-2 gap-10">

                        <div className="relative lg:h-[700px] h-[200px] w-full  cursor-pointer" >
                        <PhotoView src={data[0].img3}>
                        <Image src={data[0].img3} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                        </div>
                        <div className="relative lg:h-[700px] h-[200px] w-full  cursor-pointer" >
                        <PhotoView src={data[0].img4}>
                        <Image src={data[0].img4} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                        </div>

                    </div>

                    <div className="relative lg:h-[700px] h-[300px] w-full  cursor-pointer" >
                    <PhotoView src={data[0].img5}>
                        <Image src={data[0].img5} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                    </div>

                    <div className="relative lg:h-[700px] h-[300px] w-full  cursor-pointer" >
                    <PhotoView src={data[0].img6}>
                        <Image src={data[0].img6} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                    </div>


                    {/***************** 2 COLUMNS *****************/}

                    <div className="grid grid-cols-2 gap-10">

                        <div className="relative lg:h-[700px] h-[200px] w-full  cursor-pointer" >
                        <PhotoView src={data[0].img7}>
                        <Image src={data[0].img7} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                        </div>
                        <div className="relative lg:h-[700px] h-[200px] w-full  cursor-pointer" >
                        <PhotoView src={data[0].img8}>
                        <Image src={data[0].img8} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                        </div>

                    </div>



                    <div className="relative lg:h-[700px] h-[300px] w-full  cursor-pointer" >
                    <PhotoView src={data[0].img9}>
                        <Image src={data[0].img9} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                    </div>

                    <div className="relative lg:h-[700px] h-[300px] w-full  cursor-pointer" >
                    <PhotoView src={data[0].img10}>
                        <Image src={data[0].img10} alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </PhotoView>
                    </div>




                </div>

                </PhotoProvider>





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