import React from 'react';
import { useState } from 'react';
import AddPost from '../../components/AdminDashboard/AddPost';
import ManagePost from '../../components/AdminDashboard/ManagePost';
import connectDb from '../../lib/connectDb'
const Dashboard = ({allPosts}) => {

   const [adminOption, setAdminOption] = useState('ManagePosts');




    return (
        <div className="pt-52 py-56 font-display container mx-auto" >
            <div className="pb-20" >
                <h2 className="text-center text-4xl " >Admin Dashboard</h2>
            </div>

            <div className="grid grid-cols-[30%,60%]" >

                <div className="flex flex-col px-10 gap-4 text-lg" >
                        <button onClick={() => setAdminOption('ManagePosts') } className={`${adminOption === 'ManagePosts' ? 'bg-main' : 'bg-slate-200'} py-4 rounded-md`}>Manage Posts</button>
                        <button onClick={() => setAdminOption('ManagePackages') } className={`${adminOption === 'ManagePackages' ? 'bg-main' : 'bg-slate-200'} py-4 rounded-md`}>Manage Packages</button>
                        <button onClick={() => setAdminOption('SeeResponses') } className={`${adminOption === 'SeeResponses' ? 'bg-main' : 'bg-slate-200'} py-4 rounded-md`}>See Responses</button>
                      
                </div>

                <div>

                     {adminOption === 'ManagePosts' && <ManagePost setAdminOption={setAdminOption} allPosts={allPosts} />}   
                     {adminOption === 'addPost' && <AddPost setAdminOption={setAdminOption} />}
                    



                </div>


            </div>



        </div>
    );
};

export default Dashboard;



export async function getStaticProps(context) {


    const db = await connectDb();
    const allPosts = await db.collection("posts").find({}).toArray();
    console.log(allPosts);
  
  
  
    return {
      props: { allPosts: JSON.parse(JSON.stringify(allPosts)) },
      revalidate: 60, // will be passed to the page component as props
    }
  }