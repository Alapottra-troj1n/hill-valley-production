import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import ContactForm from '../components/ContactForm';
import styles from '../styles/contact.module.css'

const Contact = () => {

    const [hero, setHero] = useState('');

    useEffect(() => {
        if (isMobile) {
            setHero(<div className="relative h-[80vh]" ><Image src={'/contactBg.jpg'} objectFit='cover' objectPosition='-270px center' layout="fill" /> </div>)
        } else {
            setHero(<>
                <div className={styles.contactBg} >

                </div>
            </>)
        }
    }, [])



    return (
        <div>
            <div className="bg-slate-300" >
                {hero}
            </div>
            <div className='pt-14'>
                <ContactForm />
            </div>

        </div>
    );
};

export default Contact;