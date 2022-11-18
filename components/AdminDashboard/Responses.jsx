import React from 'react';

const Responses = ({ response, setResponse }) => {
    console.log(response);
    return (
        <div>

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
                            </tr>
                        </thead>
                        <tbody>
                            {response.map(res => (
                                <tr>
                                    <th>{res.name}</th>
                                    <td>{res.email}</td>
                                    <td>{res.phone}</td>
                                    <td>{res.address}</td>
                                    <td>{res.date}</td>
                                    <td>{res.message}</td>
                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
};

export default Responses;