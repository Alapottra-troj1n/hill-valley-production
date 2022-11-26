import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BsFacebook, BsFillTelephoneForwardFill } from 'react-icons/bs';
import { FaHandPointRight } from 'react-icons/fa';
import Image from 'next/image';
const ContactForm = () => {

    const [clientMsg, setClientMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = {
            name: e.target.clientName.value,
            email: e.target.clientEmail.value,
            phone: e.target.clientPhone.value,
            address: e.target.clientAddress.value,
            date: e.target.clientDate.value,
            message: clientMsg


        }

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(response)
        };

        const res = await fetch('https://www.hillvalleyproduction.com/api/addresponse', settings);
        const data = await res.json();

        if (data.success) {
            toast.success("Thank you for connecting. We'll contact you within few hours");
            e.target.reset();

        }






    }








    return (

        <div className='pb-10  bg-white container mx-auto' >





            <h2 className='font-display text-3xl  lg:text-5xl text-center' >Contact us</h2>
            <div className='border-b-2 mt-7 lg:mb-20 w-[5%] mx-auto border-main' ></div>



            <div className='grid grid-cols-1 lg:grid-cols-2' >

                    <div className='flex items-center flex-col mb-10 lg:mb-0' >
                           <div className='relative lg:w-[30rem] lg:h-[30rem] h-72 w-72' >
                           <Image src={'/getintouch.svg'} layout="fill" objectFit='cover' />
                           </div>

                          <div >
                          <h2 className='font-display font-semibold lg:text-2xl'>Connect with us on <span className='text-main hover:text-orange-400 transition-all' ><a href='https://www.facebook.com/hvpweddings' target='_blank' rel="noreferrer">Facebook</a></span> </h2>
                         
                          <h2 className='font-display font-semibold lg:text-2xl my-5'>or Simply call us on <span className='text-main hover:text-orange-400 transition-all'><a href="tel:+8801889759000">+8801889759000</a></span> </h2>
                          </div>
                    </div>

                <form onSubmit={handleSubmit} className='font-type mt-2 flex flex-col  gap-7 text-sm w-full lg:w-2/3  px-10 lg:px-0' >

                    <div>
                        <label htmlFor='clientName'  >Name :</label>
                        <input type="text" name="clientName" id="clientName" className="border rounded-md border-slate-400 py-2 px-2 w-full" />
                    </div>

                    <div >
                        <label htmlFor='clientEmail'  >Email :</label>
                        <input type="text" name="clientEmail" id="clientEmail" className="border rounded-md border-slate-400 py-2 px-2 w-full" />
                    </div>

                    <div>
                        <label htmlFor='clientPhone' >Phone :</label>
                        <input type="tel" name="clientPhone" id="clientPhone" className="border rounded-md border-slate-400  py-2  px-2 w-full" />
                    </div>

                    <div >
                        <label htmlFor='clientAddress'  >Address :</label>
                        <input type="text" name="clientAddress" id="clientAddress" className="border rounded-md border-slate-400  py-2  px-2 w-full" />
                    </div>

                    <div>
                        <label htmlFor='clientDate' >Date :</label>
                        <input type="date" name="clientDate" id="clientDate" className="border rounded-md border-slate-400  py-2  px-2 w-full" />
                    </div>

                    <div>
                        <label >Message :</label>
                        <textarea onChange={(e) => setClientMsg(e.target.value)} className="border rounded-md border-slate-400 w-[100%]  h-48 p-2" />

                    </div>



                    <div className='flex  mt-3'><button type='submit' className='bg-transparent px-7 py-2 rounded-md  font-display text-md flex items-center gap-2  border-2 border-gray-400 hover:bg-main hover:border-main  hover:text-white transition-all' >Connect </button></div>

                </form>


            </div>



        </div>
    );
};

export default ContactForm;