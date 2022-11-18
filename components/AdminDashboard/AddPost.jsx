import React, { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { toast } from 'react-toastify';

const AddPost = ({ setAdminOption,setPosts,posts }) => {

    const [category, setCategory] = useState('wedding');
    
    const handleAddBlog = async (e) => {
        e.preventDefault();

      
       const post = {
        title : e.target.title.value,
        category: category,
        coverphoto: e.target.coverphoto.value,
        "mobile cover": e.target["mobile cover"].value,
        img1: e.target.img1.value,
        img2: e.target.img2.value,
        img3: e.target.img3.value,
        img4: e.target.img4.value,
        img5: e.target.img5.value,
        img6: e.target.img6.value,
        img7: e.target.img7.value,
        img8: e.target.img8.value,
        img9: e.target.img9.value,
        img10: e.target.img10.value
       }

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        };

        const res = await fetch('http://localhost:3000/api/addblog', settings);
        const data = await res.json();

        if(data.success) {
            toast.success('Added blog successfully');
            e.target.reset();
            
       
            setPosts([...posts, data.newPost ])
        }
       

    }



    return (
        <div className="bg-sky-50 p-10 rounded-md relative">
            <IoMdArrowRoundBack class='text-2xl cursor-pointer' onClick={() => setAdminOption('ManagePosts')} />
            <h2 className="text-center text-2xl font-bold" >Add Post</h2>


            <form onSubmit={handleAddBlog}className="flex flex-col mt-10 ml-28 gap-10"  >


              <div className="grid grid-cols-2 gap-5">

              <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Title</label>
                    <input type="text" name='title' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Cover Photo URL (Potrait) </label>
                    <input type="text" name='coverphoto' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Mobile Cover URL (Landscape) </label>
                    <input type="text" name='mobile cover' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className="select select-bordered w-full max-w-xs">
                        <option selected>wedding</option>
                        <option>fashion</option>
                        <option>food</option>    
                    </select>
                </div>

            </div>


               <div className="grid grid-cols-2 gap-5">
               <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 1</label>
                    <input type="text" name='img1' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 2</label>
                    <input type="text" name='img2' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 3</label>
                    <input type="text" name='img3' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 4</label>
                    <input type="text" name='img4' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 5</label>
                    <input type="text" name='img5' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 6</label>
                    <input type="text" name='img6' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 7</label>
                    <input type="text" name='img7' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 8</label>
                    <input type="text" name='img8' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 9</label>
                    <input type="text" name='img9' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label class='text-xl font-semibold ' >Img 10</label>
                    <input type="text" name='img10' placeholder="Image Url" className="input input-bordered w-full max-w-xs" />
                </div>
               </div>

               <div>
               <input type="submit" value="Submit" class='btn' />
               </div>


            </form>

        </div>
    );
};

export default AddPost;