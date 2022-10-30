import React from 'react';


const Admin = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const admin = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        console.log(admin);

    }





    return (
        <div className='lg:pt-60 lg:pb-52 pt-40 flex justify-center items-center' >
            <div className="card w-96 bg-gray-800 shadow-xl py-10">
                <figure><img src="/Logo.png" alt="Shoes" /></figure>

                <form className="card-body gap-4" onSubmit={handleSubmit} >
                    <input type="text" placeholder="Username" name="username" className="input input-bordered w-full max-w-xs" />
                    <input type="password" placeholder="Password" name='password' className="input input-bordered w-full max-w-xs" />
                    <button type="submit" className="btn bg-slate-500 hover:bg-main">Access backend</button>
                </form>

            </div>
        </div>

    );
};

export default Admin;