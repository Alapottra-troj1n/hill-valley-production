import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Fashion from '../components/Photography/Fashion';
import Food from '../components/Photography/Food';
import Wedding from '../components/Photography/Wedding';
import connectDb from '../lib/connectDb';

const Photography = ({posts}) => {

    const {food,wedding,fashion} = posts;


    const [currentPage, setCurrentPage] = useState('wedding');

    const [bg, setBg] = useState('/photography/wedding.jpg');


    useEffect(() => {

        if (currentPage === 'wedding') {
            setBg('/photography/wedding.jpg')
        } else if (currentPage === 'food' && isMobile) {
            setBg('/photography/food.jpg')
        }else if (currentPage === 'food' && !isMobile) {
            setBg('/photography/foodpc.jpg')
        }
        else if (currentPage === 'fashion'){
            setBg('/photography/fashion.jpg')
        }



    }, [currentPage])

 

    return (
        <div>
    

            <div className=' relative h-[80vh] w-full'>
                <Image priority={true} src={bg} alt='photography-bg' layout='fill' objectFit='cover' objectPosition={'center'}/>
            </div>




            <div className='py-32  flex justify-center' >

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


            <div className='py-16 flex justify-center px-10 lg:px-0' >

                {currentPage === 'wedding' && <Wedding weddingData={wedding} />}
                {currentPage === 'fashion' && <Fashion fashionData={fashion}  />}
                {currentPage === 'food' && <Food foodData={food}  />}

            </div>


        </div>
    );
};

export default Photography;





export async function getStaticProps(context) {


    const db = await connectDb();
    const wedding = await db.collection("posts").find({category: 'wedding'}).limit(6).toArray();
    const food = await db.collection("posts").find({category: 'food'}).limit(6).toArray();
    const fashion = await db.collection("posts").find({category: 'fashion'}).limit(6).toArray();
   
  
  
  
    return {
      props: { posts: JSON.parse(JSON.stringify({wedding, fashion, food})) },
      revalidate: 7200, 
    }
  }