import React from 'react';
import { useState } from 'react';
const Dashboard = () => {

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
                      
                </div>

                <div>



                </div>


            </div>



        </div>
    );
};

export default Dashboard;