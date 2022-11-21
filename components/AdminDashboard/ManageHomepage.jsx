import React from 'react';

const ManageHomepage = ({

}) => {



    return (
        <div className="bg-sky-50 p-10 rounded-md ">
            <h2 class='text-center mb-10 text-2xl font-semibold ' >Configure Homepage</h2>


            <h2 class='text-2xl font-semibold mb-5 underline ' >2nd Section</h2>

            <form>
                <div class='grid grid-cols-2 gap-10'>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 1</label>
                        <input type="text" name='title' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 2</label>
                        <input type="text" name='title' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 3</label>
                        <input name='title' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 4</label>
                        <input type="text" name='title' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label class='text-xl font-semibold ' >Photo 5</label>
                        <input type="text" name='title' className="input input-bordered w-full max-w-xs" />
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