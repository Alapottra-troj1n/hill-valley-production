import React from 'react';

const AddPost = () => {
    return (
        <div className="bg-sky-50 p-10 rounded-md">
            <h2 className="text-center text-2xl font-bold" >Add Post</h2>

                <form className="flex flex-col mt-10 gap-10"  >
                        <div className='flex flex-col gap-2'>
                            <label class='text-xl font-semibold ' >Title</label>
                            <input type="text" name='title' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label class='text-xl font-semibold ' >Title</label>
                            <input type="text" name='title' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>

                </form>

        </div>
    );
};

export default AddPost;