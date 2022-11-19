import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Responses = ({ response, setResponse }) => {
        const [msg, setMsg] = useState('');




        const handleDelete = async(id) => {

                const settings = {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                  
                };
              
                const res = await fetch(`https://www.hillvalleyproduction.com/api/deleteresponse?_id=${id}`, settings);
                const d = await res.json();
              
               if(d.success) {
                    toast.success('Response has been deleted successfully.')  ;
                    let filteredArray = response.filter(item => item._id !== id);
                    setResponse(filteredArray);    
               }


        }
    
    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Message</h3>
                    <p className="py-4">{msg}</p>
                </div>
            </div>

            <div>

                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {response.map(res => (
                                <tr key={res._id} >
                                    <th>{res.name}</th>
                                    <td>{res.email}</td>
                                    <td>{res.phone}</td>
                                    <td>{res.address}</td>
                                    <td>{res.date}</td>
                                    <td><label htmlFor="my-modal-3" onClick={() => setMsg(res.message)} className="btn btn-sm text-xs">view msg</label> 
                                    </td>
                                    <td><button  onClick={()=> handleDelete(res._id)}   class='btn btn-sm bg-red-500 border-0 hover:bg-red-600 transition-all' >delete</button></td>
                                    

                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>

            </div>

        </div >
    );
};

export default Responses;