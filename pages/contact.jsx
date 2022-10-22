import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from '../styles/contact.module.css'

const Contact = () => {
    return (
        <div>
            <div className={styles.contactBg} >

            </div>
            <div className='pt-14'>
            <ContactForm/>
            </div>

        </div>
    );
};

export default Contact;