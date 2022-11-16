import React from 'react';

const ManagePost = ({allPosts,setAdminOption}) => {

    console.log(allPosts);

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
             
                        {allPosts.map((post,index) => (
                                <tr key={post._id}>
                                <th>{index + 1}</th>
                                <td>{post.title}</td>
                                <td><button className="btn btn-sm  border-0">Edit</button> <button className="btn btn-sm bg-red-600 border-0">Delete</button></td>
                       
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