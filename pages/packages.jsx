import React, { useState } from 'react';
import styles from '../styles/package.module.css'
import PhotoPackages from '../components/PhotoPackages/PhotoPackages'
import connectDb from '../lib/connectDb';
import ComboPackages from '../components/PhotoPackages/ComboPackage';

const Packages = ({ photoPackages, comboPackages }) => {
    const [currentPage, setCurrentPage] = useState('photo');

    return (
        <div>
            <div className="bg-slate-300" >
                <div className={styles.packageBg} >

                </div>
            </div>


            <div className='py-32 bg-sky-50 flex justify-center ' >

                <div className='grid grid-cols-2 lg:gap-36 gap-10 font-display lg:text-xl text-SM px-3 ' >
                    <div className='hover:text-main text-center'>
                        <h2 onClick={() => setCurrentPage('photo')} className={`cursor-pointer  transition-all border-b-2 ${currentPage === 'photo' ? ' border-main' : 'border-white'}`} >PHOTO PACKAGES</h2>
                    </div>
                    <div className='hover:text-main text-center'>
                        <h2 onClick={() => setCurrentPage('combo')} className={`cursor-pointer transition-all border-b-2 ${currentPage === 'combo' ? ' border-main' : 'border-white'} `} >COMBO PACKAGES</h2>
                    </div>

                </div>

            </div>

            <div className='bg-sky-50' >
                {currentPage === 'photo' && <PhotoPackages packages={photoPackages} />}
                {currentPage === 'combo' && <ComboPackages packages={comboPackages} />}
            </div>


        </div>
    );
};

export default Packages;


export async function getStaticProps(context) {


    const db = await connectDb();
    const photoPackages = await db.collection("packages").find({ packageCategory: "photoPackage" }).toArray();
    const comboPackages = await db.collection("packages").find({ packageCategory: "comboPackage" }).toArray();



    return {
        props: { photoPackages: JSON.parse(JSON.stringify(photoPackages)), comboPackages: JSON.parse(JSON.stringify(comboPackages)) },
        revalidate: 7200,
    }
}