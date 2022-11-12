import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import ContactForm from '../components/ContactForm';
import styles from '../styles/contact.module.css'
import { animate, motion } from "framer-motion";

const Contact = () => {

    const [hero, setHero] = useState('');

    useEffect(() => {
        if (isMobile) {
            setHero(<div className="relative h-[80vh]" ><Image src={'/contactBg.jpg'} objectFit='cover' objectPosition='center center' layout="fill" /> </div>)
        } else {
            setHero(<>
                <div className={styles.contactBg} >

                </div>
            </>)
        }
    }, [])



    return (
        <motion.div
        
         
        initial={{
            opacity: 0,

          }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}

        
        >
            <div className="bg-slate-300" >
                {hero}
            </div>
            <div className='pt-14'>
                <ContactForm />
            </div>

        </motion.div>
    );
};

export default Contact;