import React from 'react';
import LongPhotoCard from '../LongPhotoCard';

const Fashion = ({fashionData}) => {
    return (
        <div className="container mx-auto" >

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10" >
            {fashionData.map(data => {

                return  <LongPhotoCard key={data._id} data={data} />

            })}


        </div>
    </div>
    );
};

export default Fashion;