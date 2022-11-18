import React from 'react';
import { toast } from 'react-toastify';

const ManagePost = ({posts,setAdminOption,setPosts}) => {



    const handleDelete = async(id) => {
        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
          
        };
      
        const res = await fetch(`https://www.hillvalleyproduction.com/api/deletepost?_id=${id}`, settings);
        const d = await res.json();
      
       if(d.success) {
            toast.success('Post has been deleted successfully.')  ;
            let filteredArray = posts.filter(item => item._id !== id);
            setPosts(filteredArray);    
       }
      
    }

    

    return (
        <div className="bg-sky-50 p-10 rounded-md" >
            <button onClick={()=> setAdminOption('addPost')} className="btn bg-main border-0 hover: text-white">Add Post</button>



            <div className="mt-10" >


                <div className="overflow-x-auto">
                    <table className="table w-full">
              
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Action</th>
                
                            </tr>
                        </thead>
                        <tbody>
             
                        {posts.map((post,index) => (
                                <tr key={post._id}>
                                <th>{index + 1}</th>
                                <td>{post.title}</td>
                                <td> <button onClick={() => handleDelete(post._id) } className="btn btn-sm bg-red-600 border-0">Delete</button></td>
                       
                            </tr>
                        ))}
           
                           
                        </tbody>
                    </table>
                </div>



            </div>

        </div>
    );
};

export default ManagePost;