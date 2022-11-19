import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BsFacebook, BsFillTelephoneForwardFill } from 'react-icons/bs';
import { FaHandPointRight } from 'react-icons/fa';
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

        <div className='pb-20 pt-10 bg-white container mx-auto' >





            <h2 className='font-display text-3xl lg:text-4xl text-center' >Contact us</h2>



            <div className='flex justify-center mt-10 w-full' >



                <form onSubmit={handleSubmit} className='font-type mt-2 flex flex-col gap-7 text-sm w-full lg:w-auto px-10 lg:px-0' >

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientName' className='lg:mr-8' >Name :</label>
                        <input type="text" name="clientName" id="clientName" className="border rounded-md border-slate-400 xl:w-96 py-2 px-2 w-full" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientEmail' className='lg:mr-8' >Email :</label>
                        <input type="text" name="clientEmail" id="clientEmail" className="border rounded-md border-slate-400 xl:w-96 py-2 px-2 w-full" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientPhone' className='lg:mr-8' >Phone :</label>
                        <input type="tel" name="clientPhone" id="clientPhone" className="border rounded-md border-slate-400 xl:w-96 py-2  px-2 w-full" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientAddress' className='lg:mr-8' >Address :</label>
                        <input type="text" name="clientAddress" id="clientAddress" className="border rounded-md border-slate-400 xl:w-96 py-2  px-2 w-full" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientDate' className='lg:mr-8' >Date :</label>
                        <input type="date" name="clientDate" id="clientDate" className="border rounded-md border-slate-400 xl:w-96 py-2  px-2 w-full" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label className='lg:mr-8' >Message :</label>
                        <textarea onChange={(e) => setClientMsg(e.target.value)} className="border rounded-md border-slate-400 lg:w-96 w-[100%]  h-48 p-2" />

                    </div>



                    <div className='flex justify-center mt-3 lg:ml-24'><button type='submit' className='bg-transparent px-7 py-2 rounded-md  font-display text-md flex items-center gap-2  border-2 border-gray-400 hover:bg-main hover:border-main  hover:text-white transition-all' >Connect </button></div>

                </form>


            </div>

            <div className='flex justify-center items-center gap-4 mt-20' >

                <div className='flex justify-center items-center gap-2' >
                    <FaHandPointRight className='text-3xl text-main mr-3' />
                    <h2 className='font-semibold flex gap-3 lg:gap-2 flex-col lg:flex-row items-start lg:items-center text-sm lg:text-base' >Let's talk on<a href='https://www.facebook.com/hvpweddings' target='_blank' rel="noreferrer"><BsFacebook className='text-2xl text-blue-500 hover:text-blue-700 transition-all' /></a> or simply call us on  <a className='font-semibold underline' href="tel:+8801889759000">+8801889759000</a> for bookings</h2>
                </div>




            </div>


        </div>
    );
};

export default ContactForm;