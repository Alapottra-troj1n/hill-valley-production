import React from 'react';
import Package from '../../components/Package'


const PhotoPackages = ({ packages }) => {
    return (
        <div className=" container mx-auto " >
            <div>
                <div className="pb-16 text-center" >
                    <h2 className="text-center text-4xl font-display font-semibold border-b-2 pb-2 border-main inline-block" >ONE DAY</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 lg:gap-20 pb-10">
                    {packages.map(pack => {
                        if(pack.duration === 'oneDay'){
                            return  <Package key={pack._id} pack={pack} />;
                        }
                    })}
                </div>
            </div>

            <div>
                <div className="pb-16 pt-16 text-center" >
                    <h2 className="text-center text-4xl font-display font-semibold border-b-2 pb-2 border-main inline-block" >TWO DAYS </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 lg:gap-20 pb-10">
                    {packages.map(pack => {
                         if(pack.duration === 'twoDay'){
                            return  <Package key={pack._id} pack={pack} />;
                        }
                    })}
                </div>
            </div>




        </div>
    );
};

export default PhotoPackages;