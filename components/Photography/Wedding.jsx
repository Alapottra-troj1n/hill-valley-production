import React from 'react';
import LongPhotoCard from '../LongPhotoCard';

const Wedding = ({ weddingData }) => {
    return (
        <div className="container mx-auto" >

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10" >
                {weddingData.map(data => {

                    return  <LongPhotoCard data={data} />

                })}


            </div>
        </div>
    );
};

export default Wedding;