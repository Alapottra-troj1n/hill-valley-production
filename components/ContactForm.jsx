import React from 'react';

const ContactForm = () => {
    return (

        <div className='pb-20 bg-white ' >
            <h2 className='font-display text-2xl text-center' >Contact us</h2>

            <div className='flex justify-center mt-20 w-full' >
                <form className='font-type mt-2 flex flex-col gap-7 text-sm w-[80%] lg:w-auto' >

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientName' className='lg:mr-8' >Name :</label>
                        <input type="text" name="clientName" id="clientName" className="border-b border-slate-700 xl:w-96 py-1 px-2 w-[80%]" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientEmail' className='lg:mr-8' >Email :</label>
                        <input type="text" name="clientEmail" id="clientEmail" className="border-b border-slate-700 xl:w-96 py-1 px-2 w-[80%]" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientPhone' className='lg:mr-8' >Phone :</label>
                        <input type="tel" name="clientPhone" id="clientPhone" className="border-b border-slate-700 xl:w-96 py-1  px-2 w-[80%]" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientAddress' className='lg:mr-8' >Address :</label>
                        <input type="text" name="clientAddress" id="clientAddress" className="border-b border-slate-700 xl:w-96 py-1  px-2 w-[80%]" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label htmlFor='clientDate' className='lg:mr-8' >Date :</label>
                        <input type="date" name="clientDate" id="clientDate" className="border-b border-slate-700 xl:w-96 py-1  px-2 w-[80%]" />
                    </div>

                    <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
                        <label className='lg:mr-8' >Message :</label>
                        <textarea className="border-b border-slate-700 lg:w-96 w-[80%]  h-48 p-2" />

                    </div>

                    <div className='flex justify-center mt-3'><button type='submit' className='bg-transparent px-7 py-2 rounded-md  font-display text-md flex items-center gap-2  border-2 border-gray-400 hover:bg-main hover:border-main  hover:text-white transition-all' >Connect </button></div>

                </form>
            </div>



        </div>
    );
};

export default ContactForm;