import React, { useEffect, useState } from 'react';
import { animate, motion } from "framer-motion"
import { AiFillYoutube } from 'react-icons/ai';
import connectDb from '../lib/connectDb';
import FilmComponent from '../components/Films/FilmComponent';
const Flims = ({ allFlims }) => {

    const [currentPage, setCurrentPage] = useState('wedding');

    const [musicVideos, setMusicVideos] = useState();
    const [wedding, setWedding] = useState();
    const [fashion, setFashion] = useState();
    const [documentary, setDocumentary] = useState();
 

    useEffect(() => {
        const music = allFlims.filter(item => item.category === 'music');
        const wedding = allFlims.filter(item => item.category === 'wedding');
        const documentary = allFlims.filter(item => item.category === 'documentary');
        setMusicVideos(music);
        setWedding(wedding);
        setDocumentary(documentary)


    }, [])






    return (
        <div>










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

                <div className='grid grid-cols-3 gap-5 lg:gap-20 font-display lg:text-xl text-sm' >
                    <div className='hover:text-main text-center'>
                        <h2 onClick={() => setCurrentPage('music')} className={`cursor-pointer  transition-all border-b-2 ${currentPage === 'music' ? ' border-main' : 'border-white'}`} >MUSIC VIDEO</h2>
                    </div>
                    <div className='hover:text-main text-center'>
                        <h2 onClick={() => setCurrentPage('wedding')} className={`cursor-pointer transition-all border-b-2 ${currentPage === 'wedding' ? ' border-main' : 'border-white'} `} >WEDDING</h2>
                    </div>

                    <div className='hover:text-main text-center' >
                        <h2 onClick={() => setCurrentPage('documentary')} className={`cursor-pointer   transition-all border-b-2 ${currentPage === 'documentary' ? ' border-main' : 'border-white'}`} >COMMERCIAL</h2>
                    </div>


                </div>

            </div>





            <div className='container mx-auto '>

                <div>
                        {currentPage === 'music' && <FilmComponent films={musicVideos} />}
                        {currentPage === 'wedding' && <FilmComponent films={wedding} />}
                        {currentPage === 'fashion' && <FilmComponent films={fashion} />}
                        {currentPage === 'documentary' && <FilmComponent films={documentary} />}
                   
                </div>

                <div className="flex items-center justify-center gap-3" >
                    <h2 className="text-center text-xl font-semibold text-gray-600" >FOR MORE VISIT OUR YOUTUBE</h2>
                    <a href="https://www.youtube.com/@HillValleyProduction" target='_blank' rel="noreferrer"><AiFillYoutube className='text-5xl  text-red-600 hover:text-red-800 transition-all' /></a>
                </div>

            </div>

        </div>
    );
};

export default Flims;

export async function getServerSideProps(context) {




    const db = await connectDb();
    const allFlims = await db.collection("films").find({}).toArray();



    return {
        props: { allFlims: JSON.parse(JSON.stringify(allFlims)) },
    }

}