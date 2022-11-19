import React from 'react';
import LongPhotoCard from '../LongPhotoCard';

const Food = ({foodData}) => {

    if(!foodData || foodData.length === 0 ){

        return (
            <div className="container mx-auto" >
    
            <div className="flex justify-center items-center" >
           
                    <h2>No Stories Found</h2>
    
            </div>
        </div>
        )

    }
    



    return (
        <div className="container mx-auto" >

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10" >
            {foodData?.map(data => {

                return  <LongPhotoCard key={data?._id} data={data} />

            })}


        </div>
    </div>
    );
};

export default Food;