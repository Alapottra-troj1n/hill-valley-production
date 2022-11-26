import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const Admin = () => {

    const [error,setError] = useState('');

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const admin = {
            username: e.target.username.value,
            password: e.target.password.value
        }
  
        const res = await signIn('credentials', {
            username: admin.username,
            password: admin.password,
            redirect: false
        })
        if (res.error) {
      
            setError(res.error);
          
        }
        if (res.ok) {
             
            router.push('/admin/dashboard')


        }

    }





    return (
        <div className='lg:pt-60 lg:pb-52 pt-40 flex justify-center items-center' >
            <div className="card w-96 bg-gray-800 shadow-xl py-10">
                <figure><img src="/logo_white.png" className='w-52' alt="Shoes" /></figure>

                <form className="card-body gap-4" onSubmit={handleSubmit} >
                    <input type="text" placeholder="Username" name="username" className="input input-bordered w-full max-w-xs" />
                    <input type="password" placeholder="Password" name='password' className="input input-bordered w-full max-w-xs" />
                    <button type="submit" className="btn bg-slate-500 hover:bg-main">Access backend</button>
                    <p className="text-red-400 text-center" >{error}</p>
                </form>

            </div>
        </div>

    );
};

export default Admin;