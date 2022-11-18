import React from 'react';

const ManagePost = ({allPosts,setAdminOption}) => {



    const handleDelete = async(id) => {
        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
          
        };
      
        const res = await fetch(`http://localhost:3000/api/deletepost?_id=${id}`, settings);
        const d = await res.json();
      
       if(d.success) {
            console.log('deleted');    
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
             
                        {allPosts.map((post,index) => (
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