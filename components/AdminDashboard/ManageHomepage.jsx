import React from 'react';

const ManageHomepage = ({
    homepage1, homepage2, homepage3, homepage4, homepage5,
    setHomepage1, setHomepage2, setHomepage3, setHomepage4, setHomepage5


}) => {

   

    return (
        <div className="bg-sky-50 p-10 rounded-md ">
                <h2 class='text-center mb-10 text-2xl font-semibold ' >Configure Homepage</h2>


                <h2 class='text-2xl font-semibold mb-5 underline ' >2nd Section</h2>

            <form class='grid grid-cols-2 gap-10' >
                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Photo 1</label>
                    <input  defaultValue={homepage1} onChange={(e) => setHomepage1(e.target.value)} type="text" name='title'  className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Photo 2</label>
                    <input defaultValue={homepage2} onChange={(e) => setHomepage2(e.target.value)}  type="text" name='title'  className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Photo 3</label>
                    <input defaultValue={homepage3} type="text" onChange={(e) => setHomepage3(e.target.value)} name='title'  className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Photo 4</label>
                    <input defaultValue={homepage4} type="text" name='title' onChange={(e) => setHomepage4(e.target.value)}  className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Photo 5</label>
                    <input defaultValue={homepage5} type="text" name='title' onChange={(e) => setHomepage5(e.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>
            </form>


        </div>
    );
};

export default ManageHomepage;