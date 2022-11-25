import React from 'react';
import { toast } from 'react-toastify';



const ManageHomepage = ({section2}) => {

    const handleSubmit = async(e) => {
        e.preventDefault();
        const d = {
                name:"section2",
                image1: e.target.image1.value,
                image2: e.target.image2.value,
                image3: e.target.image3.value,
                image4: e.target.image4.value,
                image5: e.target.image5.value,

        }
        const settings = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(d)
        };

        const res =  await fetch('https://www.hillvalleyproduction.com/api/updatehomepage',settings);
        const data = await res.json();

        if(data.success){
            toast.success('Successfully changed photo on homepage')
        }


        

    }



    return (
        <div className="bg-sky-50 p-10 rounded-md ">
            <h2 class='text-center mb-10 text-2xl font-semibold ' >Configure Homepage</h2>


            <h2 class='text-2xl font-semibold mb-5 underline ' >2nd Section</h2>

            <form onSubmit={handleSubmit} >
                <div class='grid grid-cols-2 gap-10'>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 1</label>
                        <input defaultValue={section2.image1} type="text" name='image1' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 2</label>
                        <input defaultValue={section2.image2} type="text" name='image2' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 3</label>
                        <input defaultValue={section2.image3} name='image3' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 4</label>
                        <input defaultValue={section2.image4} type="text" name='image4' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 5</label>
                        <input defaultValue={section2.image5} type="text" name='image5' className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className='mt-10'>

                    <input type="submit" value="Submit" className="btn" />
                </div>


            </form>


        </div>
    );
};

export default ManageHomepage;


