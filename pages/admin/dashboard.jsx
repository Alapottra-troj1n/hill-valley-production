import React, { useEffect } from 'react';
import { useState } from 'react';
import AddPost from '../../components/AdminDashboard/AddPost';
import ManagePost from '../../components/AdminDashboard/ManagePost';
import Responses from '../../components/AdminDashboard/Responses';
import connectDb from '../../lib/connectDb'
const Dashboard = ({allPosts,allResponses}) => {

   const [adminOption, setAdminOption] = useState('ManagePosts');
   const [posts, setPosts] = useState(allPosts);
   const [response, setResponse] = useState(allResponses)



    return (
        <div className="pt-52 py-56 font-display container mx-auto" >
            <div className="pb-20" >
                <h2 className="text-center text-4xl " >Admin Dashboard</h2>
            </div>

            <div className="grid grid-cols-[20%,70%]" >

                <div className="flex flex-col px-10 gap-4 text-lg" >
                        <button onClick={() => setAdminOption('ManagePosts') } className={`${adminOption === 'ManagePosts' ? 'bg-main' : 'bg-slate-200'} py-4 rounded-md`}>Manage Posts</button>
                        <button onClick={() => setAdminOption('ManagePackages') } className={`${adminOption === 'ManagePackages' ? 'bg-main' : 'bg-slate-200'} py-4 rounded-md`}>Manage Packages</button>
                        <button onClick={() => setAdminOption('SeeResponses') } className={`${adminOption === 'SeeResponses' ? 'bg-main' : 'bg-slate-200'} py-4 rounded-md`}>See Responses</button>
                      
                </div>

                <div>

                     {adminOption === 'ManagePosts' && <ManagePost setAdminOption={setAdminOption} posts={posts} setPosts={setPosts} />}   
                     {adminOption === 'addPost' && <AddPost setAdminOption={setAdminOption} setPosts={setPosts} posts={posts} />}
                     {adminOption === 'SeeResponses' && <Responses response={response} setResponse={setResponse} />}
                    



                </div>


            </div>



        </div>
    );
};

export default Dashboard;



export async function getServerSideProps(context) {


    const db = await connectDb();
    const allPosts = await db.collection("posts").find({}).toArray();
    const allResponses = await db.collection("responses").find({}).toArray();
  
  
  
    return {
      props: { allPosts: JSON.parse(JSON.stringify(allPosts)),allResponses: JSON.parse(JSON.stringify(allResponses)) },
    }
  }